import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHotel } from './form-hotel';

describe('FormHotel', () => {
  let component: FormHotel;
  let fixture: ComponentFixture<FormHotel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormHotel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHotel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
