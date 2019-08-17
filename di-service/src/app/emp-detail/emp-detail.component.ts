import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-detail',
  template: `
  <ul *ngFor = "let e of employees">
  <li> {{e.id}}, {{e.name}}, {{e.age}}</li>
  </ul>
  `,
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  public employees = [];

  constructor(private _es: EmpService) { }

  ngOnInit() {
    this._es.getEmployees()
    .subscribe(data => this.employees = data);
  }

}
