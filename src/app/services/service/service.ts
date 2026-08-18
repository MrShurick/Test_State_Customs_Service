import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IQuestion, TCustomsTestData } from '../interface/interfaceType';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Service {
  private http = inject(HttpClient);
  
  public getTest(): Observable<TCustomsTestData> {
    return this.http.get<TCustomsTestData>('/tests/customs_test_questions.json');
  }

}
