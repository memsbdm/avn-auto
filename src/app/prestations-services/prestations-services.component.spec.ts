import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsServicesComponent } from './prestations-services.component';

describe('PrestationsServicesComponent', () => {
  let component: PrestationsServicesComponent;
  let fixture: ComponentFixture<PrestationsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationsServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
