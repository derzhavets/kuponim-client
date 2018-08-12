import { AppComponent } from './app.component';
export const AppRoutes = [{
    path: '',
    redirectTo: 'asd',
    pathMatch: 'full'
}, {
    path: '',
    component: AppComponent,
    loadChildren: './company/company.module#CompanyModule'
}]