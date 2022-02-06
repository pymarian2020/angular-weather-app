// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { allAppRoutes } from './routes';
// Components
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
// Service
import { MetaweatherService } from './metaweather.service';

@NgModule({
  declarations: [AppComponent, WeatherComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MetaweatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
