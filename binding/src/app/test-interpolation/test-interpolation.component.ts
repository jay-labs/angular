import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-interpolation',
  template: `<div>
  <h2>  Welcome {{name}}</h2>
  <h2>{{2+2}}</h2>
  <h2>{{"Welcome " + name}} </h2>
  <h2>{{greetUser()}} </h2>
  </div>
  `,
  styles: []
})
export class TestInterpolationComponent implements OnInit {

  public name = "Jay";
  
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Welcome to Angular " + this.name;
  }

}
