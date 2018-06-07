import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgbqaComponent } from './sgbqa.component';

describe('SgbqaComponent', () => {
  let component: SgbqaComponent;
  let fixture: ComponentFixture<SgbqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgbqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgbqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
