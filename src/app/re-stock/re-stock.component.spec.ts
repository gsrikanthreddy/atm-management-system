import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReStockComponent } from './re-stock.component';

describe('ReStockComponent', () => {
  let component: ReStockComponent;
  let fixture: ComponentFixture<ReStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
