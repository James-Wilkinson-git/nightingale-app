import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidesComponent } from './hides.component';

describe('HidesComponent', () => {
  let component: HidesComponent;
  let fixture: ComponentFixture<HidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HidesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
