import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { CustomerService } from './customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  arr: any;

  constructor(private formBuilder: FormBuilder,private cservice:CustomerService) { }

  ngOnInit() {
      this.tabledata();
      this.registerForm = this.formBuilder.group({
           first_name: ['', Validators.required],
           last_name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          address: ['', Validators.required],
          
      });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    const param={
      first_name:this.registerForm.value.first_name,
      last_name:this.registerForm.value.last_name,
      email:this.registerForm.value.email,
      address:this.registerForm.value.address
    }
    this.cservice.add(param).subscribe(res=>{
      this.cservice.getdata().subscribe(resp=>{
        this.arr=resp;
        this.registerForm.reset();
    });
    })

  
}
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  
  edit(value:any)
  {
    this.cservice.getdatabyid(value).subscribe(res=>{
      this.registerForm.patchValue({
        first_name:res.first_name,
        last_name:res.last_name,
        email:res.email,
        address:res.address
      })
    })
  }
  tabledata()
  {
     this.cservice.getdata().subscribe(res=>{
      this.arr=res;
  });
  }
  delete(value: any)
  {
    this.cservice.delete(value).subscribe(res=>{
      this.tabledata();
    })
  }
}
