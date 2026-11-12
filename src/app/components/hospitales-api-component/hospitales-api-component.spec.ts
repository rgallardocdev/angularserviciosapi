import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HospitalesApiComponent } from './hospitales-api-component';

describe('HospitalesApiComponent', () => {
  let component: HospitalesApiComponent;
  let fixture: ComponentFixture<HospitalesApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalesApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HospitalesApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
