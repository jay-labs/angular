import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private _url: string = "/assets/employees.json"
  constructor(private http: HttpClient) { }

  getDefaultEmployees(){
    return [
      {"id":1, "name": "Jay", "age": 38},
      {"id":2, "name": "Ram", "age": 30},
      {"id":3, "name": "Kishore", "age": 5},
      {"id":4, "name": "Kirthvik", "age": 1}
    ];
  }

  //using observable
  getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse)
  {
    return Observable.throw(error.message || "Server Error");
  }
}
