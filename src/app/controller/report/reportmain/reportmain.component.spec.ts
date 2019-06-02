import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportmainComponent } from './reportmain.component';

describe('ReportmainComponent', () => {
  let component: ReportmainComponent;
  let fixture: ComponentFixture<ReportmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
