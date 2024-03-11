import { Component, WritableSignal, signal } from '@angular/core';
import { ApiService } from '../api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fibres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fibres.component.html',
  styleUrl: './fibres.component.scss',
})
export class FibresComponent {
  fibres: any[] = [];
  columns: any[] = [];
  // Define Signals
  sortedColumn: WritableSignal<string | null> = signal(null);
  ascending: WritableSignal<boolean | null> = signal(true);
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData('fibres').subscribe((data: any) => {
      this.fibres = data;
      this.columns = Object.keys(this.fibres[0]);
    });
  }

  sortBy(column: string) {
    //Read the sorted column signal and see if it is equal to the column passed meaning we want to switch direction on this column
    if (this.sortedColumn() === column) {
      // use .set to set the new value of the signal
      this.ascending.set(!this.ascending());
    } else {
      //otherwise we are on a new column set the sorted column
      this.sortedColumn.set(column);
      //then tell that column we want asc to start
      this.ascending.set(true);
    }
    //call the sorting function
    this.sortData();
  }

  private sortData() {
    //read the direction from the signal
    const direction = this.ascending() ? 1 : -1;
    // read the column form the signal
    const column = this.sortedColumn();

    if (column) {
      //sort the array
      this.fibres.sort((a, b) => {
        if (a[column] < b[column]) {
          return -1 * direction;
        }
        if (a[column] > b[column]) {
          return 1 * direction;
        }
        return 0;
      });
    }
  }
}
