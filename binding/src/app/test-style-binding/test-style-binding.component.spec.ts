import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStyleBindingComponent } from './test-style-binding.component';

describe('TestStyleBindingComponent', () => {
  let component: TestStyleBindingComponent;
  let fixture: ComponentFixture<TestStyleBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestStyleBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
