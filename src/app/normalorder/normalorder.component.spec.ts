import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalorderComponent } from './normalorder.component';

describe('NormalorderComponent', () => {
  let component: NormalorderComponent;
  let fixture: ComponentFixture<NormalorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
