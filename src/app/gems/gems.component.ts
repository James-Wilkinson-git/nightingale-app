import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-gems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gems.component.html',
  styleUrl: './gems.component.scss',
})
export class GemsComponent {
  gems: any[] = [];
  columns: any[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData('gems').subscribe((data: any) => {
      this.gems = data;
      Object.keys(this.gems[0]).forEach((key) => {
        this.columns.push(key);
      });
    });
  }
}
