import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { IQuestion, TCustomsTestData } from '../interface/interfaceType';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class Service {
  private http = inject(HttpClient)
  private PLATFORM_ID = inject(PLATFORM_ID);
  
  public getTest(): Observable<TCustomsTestData> {
    return this.http.get<TCustomsTestData>('tests/customs_test_questions.json');
  }

}
