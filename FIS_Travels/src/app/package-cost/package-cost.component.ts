import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cost } from '../cost';
import { FareService } from '../services/fare.service';
import { PackService } from '../services/pack.service';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-package-cost',
  templateUrl: './package-cost.component.html',
  styleUrls: ['./package-cost.component.css']
})
export class PackageCostComponent implements OnInit {
  
  formData: Cost = {
    source_place: '',
    destination_place: '',
    day: 0
  }
  constructor(private fservice: FareService) { }

   amount:any;
   onSubmit(){
    console.log(this.formData);
    this.fservice.getprice(this.formData).subscribe(data=>{
       //console.log(data);
        this.amount = data;
    });
  }

  ngOnInit(): void {
    
  }

}
