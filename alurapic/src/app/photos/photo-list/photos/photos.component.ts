import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows:Photo[][] = [];

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.photos) {
      this.groupColumns();
    }
  }

  groupColumns() {
    const newRows:Photo[][] = [];
    for(let index = 0; index < this.photos.length; index+=3) {
        newRows.push(this.photos.slice(index, index + 3));
    }
    this.rows = newRows;
  }

}
