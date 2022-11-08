import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResidentComponent } from './components/resident/resident.component';

@NgModule({
    declarations: [
        AppComponent,
        PlanetComponent,
        PlanetPageComponent,
        HomePageComponent,
        ResidentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
