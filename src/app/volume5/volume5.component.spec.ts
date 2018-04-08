import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Volume5Component } from './volume5.component';

describe('Volume5Component', () => {
  let component: Volume5Component;
  let fixture: ComponentFixture<Volume5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Volume5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Volume5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
