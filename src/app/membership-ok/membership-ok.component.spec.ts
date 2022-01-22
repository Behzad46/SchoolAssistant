import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipOkComponent } from './membership-ok.component';

describe('MembershipOkComponent', () => {
  let component: MembershipOkComponent;
  let fixture: ComponentFixture<MembershipOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipOkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
