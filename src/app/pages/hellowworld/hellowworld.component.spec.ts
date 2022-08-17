import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellowworldComponent } from './hellowworld.component';

describe('HellowworldComponent', () => {
  let component: HellowworldComponent;
  let fixture: ComponentFixture<HellowworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HellowworldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HellowworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
