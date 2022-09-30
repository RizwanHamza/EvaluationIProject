import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TourPackage } from '../tour-package';

@Injectable({
  providedIn: 'root'
})
export class PackService {
  private tourUrl: string;
  
   constructor(private http:HttpClient) {
    this.tourUrl = 'http://localhost:8081/addPackage';
   }

   public save(tpack: TourPackage) {
    return this.http.post<TourPackage>(this.tourUrl,tpack);
  }

}
