import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumorderComponent } from './premiumorder.component';

describe('PremiumorderComponent', () => {
  let component: PremiumorderComponent;
  let fixture: ComponentFixture<PremiumorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
