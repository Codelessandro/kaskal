import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalOverviewComponent } from './cal-overview.component';

describe('CalOverviewComponent', () => {
  let component: CalOverviewComponent;
  let fixture: ComponentFixture<CalOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
