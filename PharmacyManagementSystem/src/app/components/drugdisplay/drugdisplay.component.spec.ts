import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugdisplayComponent } from './drugdisplay.component';

describe('DrugdisplayComponent', () => {
  let component: DrugdisplayComponent;
  let fixture: ComponentFixture<DrugdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
