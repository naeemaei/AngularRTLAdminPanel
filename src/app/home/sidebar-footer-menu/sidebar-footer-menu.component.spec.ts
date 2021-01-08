import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFooterMenuComponent } from './sidebar-footer-menu.component';

describe('SidebarFooterMenuComponent', () => {
  let component: SidebarFooterMenuComponent;
  let fixture: ComponentFixture<SidebarFooterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFooterMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarFooterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
