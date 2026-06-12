import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHabitaciones } from './form-habitaciones';

describe('FormHabitaciones', () => {
  let component: FormHabitaciones;
  let fixture: ComponentFixture<FormHabitaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormHabitaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHabitaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
