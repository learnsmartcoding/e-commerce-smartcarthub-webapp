import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumbergerComponent } from './humberger.component';

describe('HumbergerComponent', () => {
  let component: HumbergerComponent;
  let fixture: ComponentFixture<HumbergerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumbergerComponent]
    });
    fixture = TestBed.createComponent(HumbergerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
