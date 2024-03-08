import { Component } from '@angular/core';
import { ApiService } from '../api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hides',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hides.component.html',
  styleUrl: './hides.component.scss',
})
export class HidesComponent {
  hides: any[] = [];
  columns: any[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData('hides').subscribe((data: any) => {
      this.hides = data;
      Object.keys(this.hides[0]).forEach((key) => {
        this.columns.push(key);
      });
    });
  }
}
