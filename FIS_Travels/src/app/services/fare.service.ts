import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cost } from '../cost';

@Injectable({
  providedIn: 'root'
})
export class FareService {

  private tourUrl: string;

   constructor(private http:HttpClient) {
    this.tourUrl = 'http://localhost:8081/price';
   }

   public getprice(formData: Cost) {
    // return this.http.get(this.tourUrl,{params})
    return this.http.get(this.tourUrl+"?source_place="+formData.source_place+"&destination_place="+formData.destination_place+"&day="+formData.day);
  }

}
