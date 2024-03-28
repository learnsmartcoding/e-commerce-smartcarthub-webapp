import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListComponent } from './address-list.component';

describe('AddressListComponent', () => {
  let component: AddressListComponent;
  let fixture: ComponentFixture<AddressListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressListComponent]
    });
    fixture = TestBed.createComponent(AddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
