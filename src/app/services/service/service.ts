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
    const baseHref = document.getElementsByTagName('base')[0]?.href || './';
    return this.http.get<TCustomsTestData>(`${baseHref}tests/customs_test_questions.json`);
  }

}
