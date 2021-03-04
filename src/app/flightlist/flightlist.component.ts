import { Component, OnInit } from '@angular/core';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flightlist',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.css']
})
export class FlightlistComponent implements OnInit {

  public flights = Array(20)
    .fill(1)
    .map((x, i) => i);
  arr: any;

  constructor(private cservice:FlightService) {}

  ngOnInit(): void {
    this.tabledata()
  }
 tabledata()
  {
     this.cservice.getdata().subscribe(res=>{
      this.arr=res;
  });
  }
}
