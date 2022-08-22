import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAnimatedComponent } from './button-animated.component';

describe('ButtonAnimatedComponent', () => {
  let component: ButtonAnimatedComponent;
  let fixture: ComponentFixture<ButtonAnimatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAnimatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
