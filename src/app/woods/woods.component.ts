import { Component } from '@angular/core';
import { ApiService } from '../api-service.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Component({
  selector: 'app-woods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './woods.component.html',
  styleUrl: './woods.component.scss',
})
export class WoodsComponent {
  woods$: Observable<any[]>;
  columns: any[] = [];
  private woodsSubject = new BehaviorSubject<any[]>([]);
  private selectedColumnSubject = new BehaviorSubject<string | null>(null);
  private sortDirectionSubject = new BehaviorSubject<'asc' | 'desc'>('asc');
  constructor(private apiService: ApiService) {
    this.woods$ = this.woodsSubject.asObservable();
  }

  ngOnInit() {
    this.apiService.getData('woods').subscribe((data: any) => {
      this.woodsSubject.next(data);
      this.columns = Object.keys(data[0]);
    });
  }

  sortBy(column: string) {
    if (this.selectedColumnSubject.value === column) {
      this.sortDirectionSubject.next(
        this.sortDirectionSubject.value === 'asc' ? 'desc' : 'asc'
      );
    } else {
      this.selectedColumnSubject.next(column);
      this.sortDirectionSubject.next('asc');
    }

    this.woodsSubject
      .pipe(map((woods) => this.sortWoods(woods)))
      .subscribe((sortedWoods) => this.woodsSubject.next(sortedWoods));
  }

  private sortWoods(woods: any[]): any[] {
    const { selectedColumn, sortDirection } = this;
    if (selectedColumn === null) {
      return woods.slice(); // Return a copy of the original array if no column is selected
    }

    return woods.slice().sort((a, b) => {
      const valueA = a[selectedColumn];
      const valueB = b[selectedColumn];
      if (valueA < valueB) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  get selectedColumn(): string | null {
    return this.selectedColumnSubject.value;
  }

  get sortDirection(): 'asc' | 'desc' {
    return this.sortDirectionSubject.value;
  }
}
