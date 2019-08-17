import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-list',
  template: `
  <h2>{{errorMsg}}</h2>
  <ul *ngFor = "let e of employees">
  <li> {{e.name}}</li>
  </ul>
  `,
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  public employees = [];
  public errorMsg: string;

  constructor(private _es:EmpService) { }

  ngOnInit() {
   this._es.getEmployees()
            .subscribe(data => this.employees = data,
                       error => this.errorMsg = error );
  }

}
