import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaypartComponent } from './daypart.component';

describe('DaypartComponent', () => {
  let component: DaypartComponent;
  let fixture: ComponentFixture<DaypartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaypartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaypartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
