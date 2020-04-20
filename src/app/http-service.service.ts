import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'http://fraudaiml1.herokuapp.com/';
  // http://fraudaiml1.herokuapp.com/datafetch/?from=02/01/2020 11:56 AM&to=03/23/2020

  constructor(private http: HttpClient) { }

  alertname1: string;

  private userApiUrl = '/services/userapi/currentUser';
  getLoggedInUser(): Observable<any> {
      const observable = this.http.get<any>(this.userApiUrl)
      .pipe(map(data => data.name));
      return observable;
    }

  getdata(fromdate: string, todate: string): Observable<any> {
    console.log('api is called');
    const observable = this.http.post<any>(this.apiUrl + 'datafetch/', {
      from: fromdate,
      to: todate,
      check: '1',
      // columns: ['document_no', 'vendor_no', 'vendor_amount', 'payment_term']
    })
      .pipe(
        map((data) => {
          // const oHistoryData = data.map(d => d.fields);
          return data;
        })
      );
    return observable;
  }
  getresult(fromdate: string, todate: string, contval: number, columnsarray: any): Observable<any> {
    console.log('api is called');
    const observable = this.http.post<any>(this.apiUrl + 'datafetch/', {
      from: fromdate,
      to: todate,
      check: '2',
      contamination: contval,
      columns: columnsarray
    // columns: ['document_no', 'vendor_no', 'vendor_amount', 'payment_term']
    }) .pipe(
        map((data) => {
          // const oHistoryData = data.map(d => d.fields);
          return data;
        })
      );
    return observable;
  }

  postresult(fromdate: string, todate: string, contval: number, columnsarray: any , saverunid: string): Observable<any> {
    console.log('api is called');
    const observable = this.http.post<any>(this.apiUrl + 'datafetch/', {
      from: fromdate,
      to: todate,
      check: '3',
      contamination: contval,
      runid: saverunid,
      columns: columnsarray
    }) .pipe(
        map((data) => {
          return data;
        })
      );
    return observable;
  }
  postresult1(fromdate: string, todate: string, contval: number, saverunid: string): Observable<any> {
    console.log('api is called');
    const observable = this.http.post<any>(this.apiUrl + 'datafetch/', {
      from: fromdate,
      to: todate,
      check: '4',
      contamination: contval,
      runid: saverunid,
      columns: ['document_no', 'vendor_no', 'vendor_amount', 'payment_term']
    })
      .pipe(
        map((data) => {
          // const oHistoryData = data.map(d => d.fields);
          return data;
        })
      );
    return observable;
  }
}


