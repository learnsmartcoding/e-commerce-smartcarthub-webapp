import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSectionComponent } from './blog-section.component';

describe('BlogSectionComponent', () => {
  let component: BlogSectionComponent;
  let fixture: ComponentFixture<BlogSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogSectionComponent]
    });
    fixture = TestBed.createComponent(BlogSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
