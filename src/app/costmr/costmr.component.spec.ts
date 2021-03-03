import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostmrComponent } from './costmr.component';

describe('CostmrComponent', () => {
  let component: CostmrComponent;
  let fixture: ComponentFixture<CostmrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostmrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
