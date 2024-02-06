import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchResultComponent } from './product-search-result.component';

describe('ProductSearchResultComponent', () => {
  let component: ProductSearchResultComponent;
  let fixture: ComponentFixture<ProductSearchResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSearchResultComponent]
    });
    fixture = TestBed.createComponent(ProductSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
