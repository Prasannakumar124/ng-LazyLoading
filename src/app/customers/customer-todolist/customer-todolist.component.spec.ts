import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTodolistComponent } from './customer-todolist.component';

describe('CustomerTodolistComponent', () => {
  let component: CustomerTodolistComponent;
  let fixture: ComponentFixture<CustomerTodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTodolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
