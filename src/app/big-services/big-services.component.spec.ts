import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigServicesComponent } from './big-services.component';

describe('BigServicesComponent', () => {
  let component: BigServicesComponent;
  let fixture: ComponentFixture<BigServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
