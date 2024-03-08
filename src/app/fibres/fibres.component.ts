import { Component } from '@angular/core';
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
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData('fibres').subscribe((data: any) => {
      this.fibres = data;
      Object.keys(this.fibres[0]).forEach((key) => {
        this.columns.push(key);
      });
    });
  }
}
