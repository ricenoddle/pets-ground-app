import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertLoginDialogComponent } from './alert-login-dialog.component';

describe('AlertLoginDialogComponent', () => {
  let component: AlertLoginDialogComponent;
  let fixture: ComponentFixture<AlertLoginDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertLoginDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
