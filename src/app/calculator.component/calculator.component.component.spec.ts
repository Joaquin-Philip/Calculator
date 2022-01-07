import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculator.ComponentComponent } from './calculator.component.component';

describe('Calculator.ComponentComponent', () => {
  let component: Calculator.ComponentComponent;
  let fixture: ComponentFixture<Calculator.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calculator.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calculator.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
