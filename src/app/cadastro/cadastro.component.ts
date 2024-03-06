import { CommonModule, Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField, MatInputModule } from '@angular/material/input';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { validateVerticalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [MatIconButton, MatInputModule, MatFormFieldModule, FormsModule, MatFormField,
  ReactiveFormsModule, CommonModule, MatButton, MatIconButton, MatProgressSpinnerModule, MatSliderModule,
MatRadioModule, MatCardModule, MatIconButton, MatIcon, MatToolbarModule, MatToolbar, MatDatepickerModule, MatDatepicker,
MatNativeDateModule, RouterModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  CadastroForm: FormGroup;

  
  constructor(private location: Location, private formbuilder: FormBuilder){
    this.CadastroForm= this.formbuilder.group({
      name: ['', Validators.required],
      senha: ['', Validators.required],
      email:['', Validators.required, Validators.email],
      sobrenome:['',Validators.required],
      data:['', Validators.required],
      cpf:['', Validators.required],
    })
    
  }
  GoBack(): void {
    this.location.back();

  }

  

  
  
  

}
