import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityBreakdownComponent } from './priority-breakdown.component';

describe('PriorityBreakdownComponent', () => {
  let component: PriorityBreakdownComponent;
  let fixture: ComponentFixture<PriorityBreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriorityBreakdownComponent]
    });
    fixture = TestBed.createComponent(PriorityBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
