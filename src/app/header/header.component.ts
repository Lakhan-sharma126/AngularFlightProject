import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  today=new Date();
  getData:any;
  constructor(private _httpService:ServiceService, private logger:NGXLogger) { }

  ngOnInit(): void {
    this.logger.info("worked");
    this.logger.debug("hello");
    this.getUser();
  }
  getUser(){

    this._httpService.getUserDetails().subscribe((res)=>{
             console.log(res);
             this.getData = res;
  
  });
  }

}
