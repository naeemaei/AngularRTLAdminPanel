import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockClockComponent } from './lock-clock.component';

describe('LockClockComponent', () => {
  let component: LockClockComponent;
  let fixture: ComponentFixture<LockClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
