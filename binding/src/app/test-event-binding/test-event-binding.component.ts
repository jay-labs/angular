import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-event-binding',
  template: `<div>
  Welcome to Event Binding
  <Button (click) ="onClick($event)"> Greet </Button>
  <Button (click) ="greeting='Welcome Jay'"> Greet </Button>
  {{greeting}}
  <h1> Template Reference Variables: </h1>
  <input #myInput type="text">
  <Button (click) ="logMessage(myInput.value)"> Log </Button>
  </div>
  `,
  styles: [`
  
  `]
})
export class TestEventBindingComponent implements OnInit {

  public greeting = ""
  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    console.log("Welcome to Event Binding");
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value){
    console.log(value);
  }

}
