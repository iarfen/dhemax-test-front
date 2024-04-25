import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable()
export class APIServiceService {

constructor(private http: HttpClient) { }

  getData() : Promise<any>{
    return this.http.get('http://localhost:8082/chargePoints').
    toPromise();
  }

}
