import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenstockComponent } from './openstock.component';

describe('OpenstockComponent', () => {
  let component: OpenstockComponent;
  let fixture: ComponentFixture<OpenstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
