import { Component } from '@angular/core';
import{MatFormFieldModule} from '@angular/material/form-field'
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-entrar',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule, MatButtonModule,
     MatToolbarModule, CommonModule],
  templateUrl: './entrar.component.html',
  styleUrl: './entrar.component.css'
})
export class EntrarComponent {
  hide = true;
  LoginForm:FormGroup;
  
  constructor(private formBuilder: FormBuilder, private location: Location) {
    this.LoginForm = this.formBuilder.group({
      email:['',Validators.required, Validators.email],
      senha:['', Validators.required]
    });
  }


  GoBack(): void{
    this.location.back();
  }
  
}
