import { Component, OnInit } from '@angular/core';
import{ FormControl, FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit{

  constructor( ) {}

  sampleForm!:FormGroup

  ngOnInit():void{
// create an instance for sample form using form group
   this.sampleForm=new FormGroup({'email':new FormControl('',[Validators.required,Validators.email]),'password':new FormControl('',[Validators.required]),'rpassword':new FormControl('',[Validators.required])});
  }
  onRegister()
  {
    console.log(this.sampleForm.value)
  }
}
