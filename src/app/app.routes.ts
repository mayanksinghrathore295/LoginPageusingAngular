import { Routes } from '@angular/router';
import { LoginSignupComponent } from './Pages/login-signup/login-signup.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LayoutComponent } from './Pages/layout/layout.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login-signup',
        pathMatch:'full'

    },
    {
        path:'login-signup',
        component:LoginSignupComponent,
    },
    // {
    //     path:" ",
    //     component:LayoutComponent,
    //     children:[
    //         {
    //             path:'dashboard',
    //             component:DashboardComponent
    //         }
    //     ]
        
    // }
    {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent
          }]}
    
    
];