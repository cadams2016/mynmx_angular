import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavrComponent } from './left-navr.component';

describe('LeftNavrComponent', () => {
  let component: LeftNavrComponent;
  let fixture: ComponentFixture<LeftNavrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftNavrComponent]
    });
    fixture = TestBed.createComponent(LeftNavrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
