import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuHospitalesComponent } from './menu-hospitales-component';

describe('MenuHospitalesComponent', () => {
  let component: MenuHospitalesComponent;
  let fixture: ComponentFixture<MenuHospitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuHospitalesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuHospitalesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
