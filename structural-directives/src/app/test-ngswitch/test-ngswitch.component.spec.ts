import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgswitchComponent } from './test-ngswitch.component';

describe('TestNgswitchComponent', () => {
  let component: TestNgswitchComponent;
  let fixture: ComponentFixture<TestNgswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
