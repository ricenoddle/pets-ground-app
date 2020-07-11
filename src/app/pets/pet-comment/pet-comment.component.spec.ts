import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCommentComponent } from './pet-comment.component';

describe('PetCommentComponent', () => {
  let component: PetCommentComponent;
  let fixture: ComponentFixture<PetCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
