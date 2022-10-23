import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNineComponent } from './service-nine.component';

describe('ServiceNineComponent', () => {
  let component: ServiceNineComponent;
  let fixture: ComponentFixture<ServiceNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceNineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
