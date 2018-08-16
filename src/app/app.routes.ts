//Configuração das rotas
import {Routes, RouterModule} from '@angular/router';
import {ViewComponent} from './view/view.component';
import {RegisterComponent} from './register/register.component';
import { AppComponent } from './app.component';

const rotasApp : Routes=[
        {path: '', component: AppComponent},
        {path: 'view', component: ViewComponent},
        {path: 'register', component: RegisterComponent}
    ]

export const ModuloRoteamento = RouterModule.forRoot(rotasApp)