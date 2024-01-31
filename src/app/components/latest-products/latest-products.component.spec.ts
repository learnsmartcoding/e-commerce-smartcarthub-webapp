import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestProductsComponent } from './latest-products.component';

describe('LatestProductsComponent', () => {
  let component: LatestProductsComponent;
  let fixture: ComponentFixture<LatestProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestProductsComponent]
    });
    fixture = TestBed.createComponent(LatestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
