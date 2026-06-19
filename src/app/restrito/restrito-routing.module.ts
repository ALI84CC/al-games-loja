import { NgModule } from "@angular/core";
import { InicioComponent } from "../inicio/inicio.component";
import { LoginComponent } from "../login/login.component";
import { RestritoComponent } from "./restrito.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path:'restrito', component: RestritoComponent},
    {path:'login',component: LoginComponent},
    {path:'inicio',component: InicioComponent},
    {path:'', redirectTo:'/inicio', pathMatch:'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }