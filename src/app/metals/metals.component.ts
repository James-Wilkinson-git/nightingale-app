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
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMetals().subscribe((data: any) => {
      this.metals = data;
      Object.keys(this.metals[0]).forEach((key) => {
        this.columns.push(key);
      });
    });
  }
}
