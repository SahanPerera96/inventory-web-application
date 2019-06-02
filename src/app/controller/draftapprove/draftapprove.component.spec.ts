import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftapproveComponent } from './draftapprove.component';

describe('DraftapproveComponent', () => {
  let component: DraftapproveComponent;
  let fixture: ComponentFixture<DraftapproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftapproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
