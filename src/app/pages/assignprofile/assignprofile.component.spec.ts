import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignprofileComponent } from './assignprofile.component';

describe('AssignprofileComponent', () => {
  let component: AssignprofileComponent;
  let fixture: ComponentFixture<AssignprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
