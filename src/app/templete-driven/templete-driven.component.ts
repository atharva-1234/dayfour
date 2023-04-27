import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templete-driven',
  templateUrl: './templete-driven.component.html',
  styleUrls: ['./templete-driven.component.css']
})
export class TempleteDrivenComponent {

  constructor() {}

  ngOnInit():void{

  }
  // to print the values of form on console
  onRegister(form:NgForm)
  {
    console.log(form.value)
  }
}
