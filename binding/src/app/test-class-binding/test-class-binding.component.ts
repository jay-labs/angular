import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-class-binding',
  template: `<div>
  <h2 class="text-success"> Jay</h2>
  <h2 [class]="successClass"> Jay</h2>
  <h2 class="text-special" [class]="successClass"> Jay</h2>
  <h2 [class.text-danger]="hasError" > Jay</h2>
  <h2 [ngClass]="messageClasses"> Jay</h2>
  </div>
  `,
  styles: [`
  .text-success{
    color: green;
  }
  .text-danger{
    color: red;
  }
  .text-special{
    font-style: italic;
  }
  `]
})
export class TestClassBindingComponent implements OnInit {

  public successClass="text-success";

  public hasError=true;
  public isSpecial =true;

  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial    
  }

  constructor() { }

  ngOnInit() {
  }

}
