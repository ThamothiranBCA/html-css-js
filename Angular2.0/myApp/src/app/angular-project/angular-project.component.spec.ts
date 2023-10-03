import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProjectComponent } from './angular-project.component';

describe('AngularProjectComponent', () => {
  let component: AngularProjectComponent;
  let fixture: ComponentFixture<AngularProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularProjectComponent]
    });
    fixture = TestBed.createComponent(AngularProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
