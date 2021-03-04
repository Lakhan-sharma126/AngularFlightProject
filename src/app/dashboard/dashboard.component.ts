import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flightlist/flight.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  arr: any;
  registerForm!: FormGroup;
  submitted = false;
  flightlist=false;


  constructor(private formBuilder: FormBuilder,private cservice:FlightService) {}

  ngOnInit(): void {
    this.tabledata();
    this.registerForm = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      fromdate: ['', Validators.required],
      todate: ['', Validators.required],
     
 });
  }
  get f() { return this.registerForm.controls; }
 tabledata()
  {
     this.cservice.getdata().subscribe(res=>{
      this.arr=res;
  });
  }
  arr1=[{"id":'2',"flightname":'indigo Logo IndiGo',"Departure":'"05:00 New Delhi',"Duration":'02 h 40 m Non stop',"Arrival":'07:40 Bengaluru',"Price":'Price',"images":"../../assets/icons/indigo.png","From":"From","To":"Noida"}];
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.flightlist=true;
    this.arr.forEach((element: { from: any;to:any;id:string;flightname:string;Departure:string;Duration:string;
      Arrival:string;Price:string; images:string;From:string;To:string}) => {
      if(this.registerForm.value.from==element.From && this.registerForm.value.to==element.To)
      {
        this.arr1.push({
          "id":element.id,
          "flightname":element.flightname,
          "Departure":element.Departure,
          "Duration":element.Duration,
          "Arrival":element.Arrival,
          "Price":element.Price,
          "images":element.images,
          "From":element.From,
          "To":element.To
        });
      }
    });

}

}
// "id": 9,
// "flightname": "indigo Logo IndiGo",
// "Departure": "05:00 New Delhi",
// "Duration": "02 h 40 m Non stop",
// "Arrival":"07:40 Bengaluru",
// "Price":"₹ 6,867",
// "images":"../../assets/icons/indigo.png",
// "From":"Delhi",
// "To":"Noida"