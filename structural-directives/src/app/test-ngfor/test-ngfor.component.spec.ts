import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgforComponent } from './test-ngfor.component';

describe('TestNgforComponent', () => {
  let component: TestNgforComponent;
  let fixture: ComponentFixture<TestNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
