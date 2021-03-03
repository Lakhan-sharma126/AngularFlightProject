import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseModel } from 'src/model/BaseModel';
import { NGXLogger } from 'ngx-logger';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient, private logger: NGXLogger) {}
  


  getdata()
  {
      return this.http.get('http://localhost:7000/users/list').pipe(map(x => x as any));
  }

  getdatabyid(id:any)
  {
      return this.http.get(`http://localhost:7000/users/list:${id}`).pipe(map(x => x as any));
  }
  delete(id: any)
  {
    return this.http.delete(`http://localhost:7000/users/delete/${id}`)
  }

  add(param:any)
  {
    return this.http
    .post('http://localhost:7000/users', param)
  }

  update(id:any,Data:any)
  {
    return    this.http.put(
      `http://localhost:7000/users/update/${id}`,
      Data
    )
  }
}
