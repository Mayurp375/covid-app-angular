import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  data: any;
  constructor(private http: HttpClient) { }


  fetchData(): Observable<any>  {
    return this.http.get('https://data.covid19india.org/data.json');
  }


}


