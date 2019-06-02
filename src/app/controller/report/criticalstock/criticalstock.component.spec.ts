import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalstockComponent } from './criticalstock.component';

describe('CriticalstockComponent', () => {
  let component: CriticalstockComponent;
  let fixture: ComponentFixture<CriticalstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
