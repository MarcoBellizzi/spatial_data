import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-images',
  templateUrl: './show-images.component.html',
  styleUrls: ['./show-images.component.css'],
})
export class ShowImagesComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  id:string|null = this.route.snapshot.paramMap.get('id')

  path_color: string = "http://localhost:8080/image?id=" + this.id + "&path=color.png"
  path_tree: string = "http://localhost:8080/image?id=" + this.id + "&path=tree.png"

  path_color_area:string = "http://localhost:8080/image?id=" + this.id + "&path=color_area.png"
  path_color_sr_area:string = "http://localhost:8080/image?id=" + this.id + "&path=color_sr_area.png"

  path_tree_area:string = "http://localhost:8080/image?id=" + this.id + "&path=tree_area.png"
  path_tree_sr_area:string = "http://localhost:8080/image?id=" + this.id + "&path=tree_sr_area.png"

  path_color_alert : string = "http://localhost:8080/image?id=" + this.id + "&path=color_alert.png"
  path_color_sr_area_alert:string = "http://localhost:8080/image?id=" + this.id + "&path=color_sr_area_alert.png"

  goMap() {
    this.router.navigate([''])
  }
}
