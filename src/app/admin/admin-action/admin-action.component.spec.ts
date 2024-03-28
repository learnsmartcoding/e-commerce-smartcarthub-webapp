import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActionComponent } from './admin-action.component';

describe('AdminActionComponent', () => {
  let component: AdminActionComponent;
  let fixture: ComponentFixture<AdminActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminActionComponent]
    });
    fixture = TestBed.createComponent(AdminActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
