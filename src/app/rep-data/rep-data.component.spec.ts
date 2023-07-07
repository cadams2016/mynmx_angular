import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepDataComponent } from './rep-data.component';

describe('RepDataComponent', () => {
  let component: RepDataComponent;
  let fixture: ComponentFixture<RepDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepDataComponent]
    });
    fixture = TestBed.createComponent(RepDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
