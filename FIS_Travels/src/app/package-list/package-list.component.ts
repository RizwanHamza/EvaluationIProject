import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TravelService } from '../services/travel.service';
import { TourPackage } from '../tour-package';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  tpackages: TourPackage[] = [];
  constructor(private tservice: TravelService) { }

  ngOnInit(){
    this.tservice.findAll().subscribe(data => {
      this.tpackages = data;
    })
  }

}
