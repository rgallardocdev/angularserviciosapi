import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleHospitalComponent } from './detalle-hospital-component';

describe('DetalleHospitalComponent', () => {
  let component: DetalleHospitalComponent;
  let fixture: ComponentFixture<DetalleHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleHospitalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleHospitalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
