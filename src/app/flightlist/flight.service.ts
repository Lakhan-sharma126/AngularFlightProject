import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseModel } from 'src/model/BaseModel';
import { NGXLogger } from 'ngx-logger';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient, private logger: NGXLogger) {}
  


  getdata()
  {
      return this.http.get('http://localhost:7000/lists/list').pipe(map(x => x as any));
  }

 
}