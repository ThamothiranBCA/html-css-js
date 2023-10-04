import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMatchComponent } from './component-match.component';

describe('ComponentMatchComponent', () => {
  let component: ComponentMatchComponent;
  let fixture: ComponentFixture<ComponentMatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentMatchComponent]
    });
    fixture = TestBed.createComponent(ComponentMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
