import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { TourPackage } from '../tour-package';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private tourUrl: string;

   constructor(private http:HttpClient) {
    this.tourUrl = 'http://localhost:8081/explore';
   }
   public findAll():Observable<TourPackage[]>{
    return this.http.get<TourPackage[]>(this.tourUrl);
   }
}
