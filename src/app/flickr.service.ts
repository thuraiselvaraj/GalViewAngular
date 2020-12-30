import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {
  limit_img=15;

  constructor() { }
  getPhotos():Array<String>{
    let urls:Array<String>=[];
    for(let i=0;i<this.limit_img;i++){
      urls.push(`https://picsum.photos/200/300?random=${i}`);
    }
    return urls
  }
  }

