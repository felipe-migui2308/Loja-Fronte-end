import { Component } from '@angular/core'
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button'
import{MatToolbarModule} from '@angular/material/toolbar'
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule,MatButtonModule, MatToolbarModule, RouterLink,RouterOutlet,RouterLinkActive,
  MatMenuModule, MatSidenavModule, MatCardModule,FormsModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showFiller = false;
  constructor(private router: Router){}
  
  
  
}




