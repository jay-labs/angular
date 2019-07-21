import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestClassBindingComponent } from './test-class-binding.component';

describe('TestClassBindingComponent', () => {
  let component: TestClassBindingComponent;
  let fixture: ComponentFixture<TestClassBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestClassBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
