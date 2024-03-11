import { Component } from '@angular/core';
import { ApiService } from '../api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metals.component.html',
  styleUrl: './metals.component.scss',
})
export class MetalsComponent {
  metals: any[] = [];
  columns: any[] = [];
  selectedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc'; // Default sorting direction
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData('metals').subscribe((data: any) => {
      this.metals = data;
      Object.keys(this.metals[0]).forEach((key) => {
        this.columns.push(key);
      });
    });
  }

  sortBy(column: string) {
    if (this.selectedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.selectedColumn = column;
      this.sortDirection = 'asc';
    }

    this.metals.sort((a, b) => {
      if (this.selectedColumn !== null) {
        const valueA = a[this.selectedColumn];
        const valueB = b[this.selectedColumn];
        if (valueA < valueB) {
          return this.sortDirection === 'asc' ? -1 : 1;
        }
        if (valueA > valueB) {
          return this.sortDirection === 'asc' ? 1 : -1;
        }
      }
      return 0;
    });
  }
}
