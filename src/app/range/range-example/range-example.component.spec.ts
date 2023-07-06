import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeExampleComponent } from './range-example.component';

describe('RangeExampleComponent', () => {
  let component: RangeExampleComponent;
  let fixture: ComponentFixture<RangeExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangeExampleComponent]
    });
    fixture = TestBed.createComponent(RangeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
