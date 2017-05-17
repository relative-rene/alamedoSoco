import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDishesComponent } from './small-dishes.component';

describe('SmallDishesComponent', () => {
  let component: SmallDishesComponent;
  let fixture: ComponentFixture<SmallDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
