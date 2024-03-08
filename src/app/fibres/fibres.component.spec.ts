import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibresComponent } from './fibres.component';

describe('FibresComponent', () => {
  let component: FibresComponent;
  let fixture: ComponentFixture<FibresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FibresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FibresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
