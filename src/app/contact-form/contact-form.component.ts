import { Component, OnInit, } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {


 
  log(x:any){console.log(x)}
  
  age="/^(?:1[8-9]|[2-5][0-9]|65)$/"

submit(login:any){
  console.log("form  submitted",login  )


  }
  ngOnInit(): void {
  }
}



  