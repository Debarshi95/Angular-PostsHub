import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLeftSidebarComponent } from './dashboard-left-sidebar.component';

describe('DashboardLeftSidebarComponent', () => {
  let component: DashboardLeftSidebarComponent;
  let fixture: ComponentFixture<DashboardLeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
