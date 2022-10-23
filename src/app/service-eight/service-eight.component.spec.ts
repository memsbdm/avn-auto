import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEightComponent } from './service-eight.component';

describe('ServiceEightComponent', () => {
  let component: ServiceEightComponent;
  let fixture: ComponentFixture<ServiceEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
