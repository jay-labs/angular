import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-style-binding',
  template: `<div>
  <h2 [class.text-danger]="hasError" > Style Binding</h2>
  <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding1</h2>
  <h2 [style.color]="highlightColor">Style Binding2</h2>
  <h2 [ngStyle]="titleStyles">Style Binding3</h2>
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
export class TestStyleBindingComponent implements OnInit {

  public hasError = true;
  public isSpecial = true;
  public highlightColor = "orange";

  public titleStyles={
    color:"blue",
    fontStyle: "italic"
  }
  constructor() { }

  ngOnInit() {
  }

}
