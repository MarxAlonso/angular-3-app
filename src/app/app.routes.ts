import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { CompanyComponent } from './company/company.component';
import { EmployeesComponent } from './employees/employees.component';
import {AstroComponent} from './Framework/astro/astro.component';
import {ReactComponent} from './Framework/react/react.component';
import {AngularComponent} from './Framework/angular/angular.component';
import {LaravelComponent} from './Framework/laravel/laravel.component';

export const routes: Routes = [
    //Aca se cambia el titulo de la pagina dependiendo del apartado de la pagina que nos estamos dirigiendo
    {'path': 'home', 'title': 'Inicio', component:HomeComponent},
    {'path': 'about', 'title': 'Sobre Nosotros', component:AboutComponent},
    {'path': 'about', children:[
        {'path': 'company', 'title': 'Sobre Nosotros | Company', component: CompanyComponent},
        {'path': 'employees', 'title': 'Sobre Nosotros | Employees', component: EmployeesComponent}
    ]},
    {'path': 'contact', 'title': 'Contacto', component:ContactComponent},
    {'path': '', redirectTo: '/home', pathMatch: 'full'},
    
    //Creamos aca los enlaces para los componente de cada Framework
    {'path':'Framework', children:[
        {'path': 'astro', 'title': 'Framework | Astro', component:AstroComponent},
        {'path': 'react', 'title': 'Framework | React', component: ReactComponent},
        {'path':'angular', 'title': 'Framework | Angular', component: AngularComponent},
        {'path':'laravel', 'title': 'Framework | Laravel', component: LaravelComponent}
    ]},

    {'path': '**', component:PageNotFoundComponent},
];
