import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';

import { MapComponent } from './map/map.component';
import { ShowImagesComponent } from './show-images/show-images.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ShowImagesComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
