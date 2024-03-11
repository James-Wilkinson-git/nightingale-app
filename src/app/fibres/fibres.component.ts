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
    if (this.sortedColumn() === column) {
      // Toggle sorting direction by calling the Signal as a function with a new value
      this.ascending.set(!this.ascending());
    } else {
      this.sortedColumn.set(column);
      this.ascending.set(true);
    }
    this.sortData();
  }

  private sortData() {
    const direction = this.ascending() ? 1 : -1;
    const column = this.sortedColumn();

    if (column) {
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
