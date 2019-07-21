import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ngif',
  template: `
  <h2 *ngIf="displayName"> ngIf directive
  </h2>

  <h2 *ngIf="displayName; else elseBlock">
  </h2>

  <div *ngIf="displayName; then thenBlock else elseBlock"> 
  </div>

  <ng-template #thenBlock>
    Then Block
  </ng-template>

  <ng-template #elseBlock>
    Else Block
  </ng-template>  
  `,
  styleUrls: ['./test-ngif.component.css']
})
export class TestNgifComponent implements OnInit {

  displayName = false;
  constructor() { }

  ngOnInit() {
  }

}
