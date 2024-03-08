import { Component } from '@angular/core';
import { ApiService } from '../api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-woods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './woods.component.html',
  styleUrl: './woods.component.scss',
})
export class WoodsComponent {
  woods: any[] = [];
  columns: any[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData('woods').subscribe((data: any) => {
      this.woods = data;
      Object.keys(this.woods[0]).forEach((key) => {
        this.columns.push(key);
      });
    });
  }
}
