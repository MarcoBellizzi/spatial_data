import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowImagesComponent } from './show-images/show-images.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'show-images', component: ShowImagesComponent }
];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forRoot(routes)]],
  exports: [RouterModule]
})
export class AppRoutingModule { }
