import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-binding',
  template: `
  <input [id] = "myId" value="Jay" type="text">
  <input id = "{{myId}}" value="Jay" type="text">
  <input disabled="false" id = "{{myId}}" value="Jay" type="text">
  <input [disabled]="isDisabled" id = "{{myId}}" value="Jay" type="text">
  <input bind-disabled="isDisabled" id = "{{myId}}" value="Jay" type="text">
  `,
  styles: []
})
export class TestBindingComponent implements OnInit {

  public myId = "testId"
  public isDisabled = false;
  
  constructor() { }

  ngOnInit() {
  }

}
