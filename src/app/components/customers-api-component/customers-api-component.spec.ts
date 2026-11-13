import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomersApiComponent } from './customers-api-component';

describe('CustomersApiComponent', () => {
  let component: CustomersApiComponent;
  let fixture: ComponentFixture<CustomersApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomersApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
