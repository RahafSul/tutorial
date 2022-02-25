import { Component } from '@angular/core';
import{FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'First-app';
  nameInput='';
 


 
validationForm= new FormGroup({
  name: new FormControl(this.nameInput,[
Validators.required,
Validators.minLength(4)
  ])
});


get name(){
  return this.validationForm.get('name');
}

}
