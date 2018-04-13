import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashsub2Component } from './dashsub2.component';

describe('Dashsub2Component', () => {
  let component: Dashsub2Component;
  let fixture: ComponentFixture<Dashsub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashsub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashsub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
