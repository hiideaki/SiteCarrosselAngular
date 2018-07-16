import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { HistoriaComponent } from './historia/historia.component';
import { TimeComponent } from './time/time.component';
import { ContatoComponent } from './contato/contato.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'sobre',
        component: SobreComponent
    },
    {
        path: 'historia',
        component: HistoriaComponent
    },
    {
        path: 'time',
        component: TimeComponent
    },
    {
        path: 'contato',
        component: ContatoComponent
    },
    {
        path: '404',
        component: NotfoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
