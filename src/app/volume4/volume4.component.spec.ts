import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Volume4Component } from './volume4.component';

describe('Volume4Component', () => {
  let component: Volume4Component;
  let fixture: ComponentFixture<Volume4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Volume4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Volume4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
