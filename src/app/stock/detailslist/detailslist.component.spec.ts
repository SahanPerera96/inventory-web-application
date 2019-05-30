import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailslistComponent } from './detailslist.component';

describe('DetailslistComponent', () => {
  let component: DetailslistComponent;
  let fixture: ComponentFixture<DetailslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
