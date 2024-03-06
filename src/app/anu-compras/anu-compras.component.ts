import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterModule, } from '@angular/router';
import { MesaSinucaComponent } from '../Anuncios/mesa-sinuca/mesa-sinuca.component';
import { QuadroDecoComponent } from '../Anuncios/quadro-deco/quadro-deco.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anu-compras',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButton,MatToolbarModule, RouterLink, MesaSinucaComponent, QuadroDecoComponent,
  CommonModule],
  templateUrl: './anu-compras.component.html',
  styleUrl: './anu-compras.component.css'
})
export class AnuComprasComponent {

;

  anuncios=[
    {id: 1, preco: '45,99$', titulo:'Cortinas Para Sala e Escritorio', img: 'https://images2.imgbox.com/d0/74/Vrp91ZIx_o.jpeg', descricao:'Cortinas feitas especialmente para deixar sua casa mais bonira, com o melhor tecido do mercado'},
    {id: 2, preco:'100$', titulo:'Capa Para Mesa de Sinuca', img:'https://images2.imgbox.com/df/47/EGgExV83_o.jpg', descricao:'Capas Impermeáveis para proteção da sua mesa de sinuca de altissíma qualidade, proteja sua mesa de dias ensolarados e chuvosos',},
    {id: 3, preco:'39,99$', titulo:'Quadro Decorativo', img:'https://images2.imgbox.com/44/5a/yAQhkXNE_o.jpeg', descricao:'Lindos Quadros decorativos para dar um toque de elegancia ao seu ambiente',}

  ]
  

}
