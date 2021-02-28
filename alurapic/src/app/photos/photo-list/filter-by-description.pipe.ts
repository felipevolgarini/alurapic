import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe({name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform{
    
    transform(photos: Photo[], filter:string) {
        filter = filter.trim().toLowerCase();
        if (filter) {
            return photos.filter(photo => photo.description.toLowerCase().includes(filter));
        }
        else {
            return photos;
        }
    }
    

}