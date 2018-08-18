import { TestComponent } from './test/test.component';
import { AppComponent } from './app.component';

export const AppRoutes = [{
    path: '',
    redirectTo: 'asd',
    pathMatch: 'full'
}, {
    path: '',
    component: AppComponent,
    loadChildren: './company/company.module#CompanyModule'
}, {
    path: '',
    component: AppComponent,
    loadChildren: './customer/customer.module#CustomerModule'
}, {
    path: 'test',
    component: TestComponent
    
}]