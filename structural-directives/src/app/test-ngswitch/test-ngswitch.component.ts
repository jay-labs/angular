import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ngswitch',
  template: `
  <div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">You picked red color </div>
  <div *ngSwitchCase="'blue'">You picked red color </div>
  <div *ngSwitchDefault>Pick again </div>
  </div>
  `,
  styleUrls: ['./test-ngswitch.component.css']
})
export class TestNgswitchComponent implements OnInit {

  color = "red";
  constructor() { }

  ngOnInit() {
  }

}
