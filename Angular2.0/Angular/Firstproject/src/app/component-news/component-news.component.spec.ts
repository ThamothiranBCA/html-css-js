import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNewsComponent } from './component-news.component';

describe('ComponentNewsComponent', () => {
  let component: ComponentNewsComponent;
  let fixture: ComponentFixture<ComponentNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentNewsComponent]
    });
    fixture = TestBed.createComponent(ComponentNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
