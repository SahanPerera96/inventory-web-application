import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerinvoiceComponent } from './consumerinvoice.component';

describe('ConsumerinvoiceComponent', () => {
  let component: ConsumerinvoiceComponent;
  let fixture: ComponentFixture<ConsumerinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
