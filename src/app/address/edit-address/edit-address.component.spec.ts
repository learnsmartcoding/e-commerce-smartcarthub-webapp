import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddressComponent } from './edit-address.component';

describe('EditAddressComponent', () => {
  let component: EditAddressComponent;
  let fixture: ComponentFixture<EditAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAddressComponent]
    });
    fixture = TestBed.createComponent(EditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
