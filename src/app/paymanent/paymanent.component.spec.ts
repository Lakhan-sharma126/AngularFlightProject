import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymanentComponent } from './paymanent.component';

describe('PaymanentComponent', () => {
  let component: PaymanentComponent;
  let fixture: ComponentFixture<PaymanentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymanentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
