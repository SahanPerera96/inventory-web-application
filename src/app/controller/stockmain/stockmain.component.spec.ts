import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockmainComponent } from './stockmain.component';

describe('StockmainComponent', () => {
  let component: StockmainComponent;
  let fixture: ComponentFixture<StockmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
