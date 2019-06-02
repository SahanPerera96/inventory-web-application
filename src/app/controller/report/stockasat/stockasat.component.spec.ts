import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockasatComponent } from './stockasat.component';

describe('StockasatComponent', () => {
  let component: StockasatComponent;
  let fixture: ComponentFixture<StockasatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockasatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockasatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
