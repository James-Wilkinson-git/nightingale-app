import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodsComponent } from './woods.component';

describe('WoodsComponent', () => {
  let component: WoodsComponent;
  let fixture: ComponentFixture<WoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
