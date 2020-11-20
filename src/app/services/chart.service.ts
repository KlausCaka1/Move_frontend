import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  API_HOST: 'http://localhost:8000';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    method: 'GET',
    mode: 'no-cors'
  };

  constructor(private http: HttpClient) {
  }

  getChartsData(): Observable<any> {
    return this.http.get('http://localhost:8000' + `/charts/get-charts/`, this.httpOptions);
  }
}
