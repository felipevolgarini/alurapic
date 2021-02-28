import { NgModule } from "@angular/core";
import {Router, RouterModule, Routes} from '@angular/router';
import { AuthGuard } from "./core/auth/auth.guard";

import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./home/signin/signin.component";
import { SignUpComponent } from "./home/signup/signup.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";

const routes:Routes = [
    {
        path:'user/:userName', 
        component:PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'        
    },
    {
        path: 'p/add', 
        component: PhotoFormComponent
    },
    {
        path: '**', 
        component: NotFoundComponent 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}