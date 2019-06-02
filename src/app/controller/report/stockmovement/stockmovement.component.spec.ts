import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockmovementComponent } from './stockmovement.component';

describe('StockmovementComponent', () => {
  let component: StockmovementComponent;
  let fixture: ComponentFixture<StockmovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockmovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockmovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
