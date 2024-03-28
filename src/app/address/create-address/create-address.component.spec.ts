import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAddressComponent } from './create-address.component';

describe('CreateAddressComponent', () => {
  let component: CreateAddressComponent;
  let fixture: ComponentFixture<CreateAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAddressComponent]
    });
    fixture = TestBed.createComponent(CreateAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
