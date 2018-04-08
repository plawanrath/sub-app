import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Volume3Component } from './volume3.component';

describe('Volume3Component', () => {
  let component: Volume3Component;
  let fixture: ComponentFixture<Volume3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Volume3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Volume3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
