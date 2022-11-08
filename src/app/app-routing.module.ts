import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';

const routes: Routes = [
    {
        path: '', component: HomePageComponent
    },
    {
        path: ':name', component: PlanetPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
