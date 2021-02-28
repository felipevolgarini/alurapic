import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Photo } from "./photo";

@Injectable({providedIn: "root"})
export class PhotoService{
    
    constructor(private _http: HttpClient) { 

    }

    listFromUser(userName: string, page: number) {
        const params = new HttpParams().append('page', page.toString())
        
        return this._http
            .get<Photo[]>(`http://localhost:3000/${userName}/photos`, {params});        
    }
}