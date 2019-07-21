import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-twoway-binding',
  template: `<div>
  <input [(ngModel)] = "name" type="text">
  {{name}}
  </div>
  `,
  styles: [`
  
  `]
})
export class TestTwowayBindingComponent implements OnInit {

  public name ="";

  constructor() { }

  ngOnInit() {
  }

}
