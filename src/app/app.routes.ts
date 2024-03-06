import { Routes } from '@angular/router';

import { EntrarComponent } from './entrar/entrar.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { QuadroDecoComponent } from './Anuncios/quadro-deco/quadro-deco.component';
import { HomeComponent } from './home/home.component';
import { MesaSinucaComponent } from './Anuncios/mesa-sinuca/mesa-sinuca.component';
import { AnuComprasComponent } from './anu-compras/anu-compras.component';

export const routes: Routes = [
    {path:'', component:HomeComponent,
    children:[
        {path:'MeSinu', component: MesaSinucaComponent},
        {path:'QuadroDec', component: QuadroDecoComponent},
        ]
    },
    {path:'Entrar', component: EntrarComponent },
    {path:'cadastro', component: CadastroComponent},
    {path:'AnuCompra', component: AnuComprasComponent},
   
    

];
