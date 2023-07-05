import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugformComponent } from './drugform.component';

describe('DrugformComponent', () => {
  let component: DrugformComponent;
  let fixture: ComponentFixture<DrugformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrugformComponent]
    });
    fixture = TestBed.createComponent(DrugformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
