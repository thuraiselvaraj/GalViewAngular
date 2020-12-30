import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../flickr.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  flickerResponse: Array<String>;  

  constructor(private flickrService: FlickrService) { }

  ngOnInit() {
    
      this.flickerResponse = this.flickrService.getPhotos();
  
  }

}
