import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSigninComponent } from './component-signin.component';

describe('ComponentSigninComponent', () => {
  let component: ComponentSigninComponent;
  let fixture: ComponentFixture<ComponentSigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentSigninComponent]
    });
    fixture = TestBed.createComponent(ComponentSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
