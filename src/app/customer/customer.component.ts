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
  update=false;
  updateid='';
  clicksave=false;
  constructor(private formBuilder: FormBuilder,private cservice:CustomerService) { }

  ngOnInit() {
      this.tabledata();
      this.registerForm = this.formBuilder.group({
           first_name: [''],
           last_name: [''],
          email: [''],
          address: [''],
          
      });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.clicksave=true;
    const param={
      first_name:this.registerForm.value.first_name,
      last_name:this.registerForm.value.last_name,
      email:this.registerForm.value.email,
      address:this.registerForm.value.address
    }
    this.cservice.add(param).subscribe(res=>{
      setTimeout(() => {
        this.cservice.getdata().subscribe(resp=>{
          this.arr=resp;
          this.registerForm.reset();
          this.clicksave=false;
      });
      },500);
  
    })

  
}




  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  
formupdate()
{
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
  this.cservice.update(this.updateid,param).subscribe(res=>{
    this.cservice.getdata().subscribe(resp=>{
      this.arr=resp;
      this.registerForm.reset();
      this.updateid='';
      this.update=false;
  });
  })
}

  edit(value:any)
  {
    this.cservice.getdatabyid(value).subscribe(res=>{
      this.updateid=res.id;
      this.update=true;
      this.registerForm.patchValue({
        first_name:res.first_name,
        last_name:res.last_name,
        email:res.email,
        address:res.address
      });
      
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
