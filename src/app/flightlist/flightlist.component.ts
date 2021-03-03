import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flightlist',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.css']
})
export class FlightlistComponent implements OnInit {

  public flights = Array(20)
    .fill(1)
    .map((x, i) => i);

  constructor() {}

  ngOnInit(): void {}

}
