import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackService } from '../services/pack.service';
import { TravelService } from '../services/travel.service';
import { TourPackage } from '../tour-package';

@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.css']
})
export class PackageFormComponent implements OnInit {
  tpack: TourPackage;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tservice: PackService) { 
       this.tpack = new TourPackage();
    }
    onSubmit(){
      this.tservice.save(this.tpack).subscribe(result => this.gotoPackageList());
    }
    gotoPackageList(){
      this.router.navigate(['/explore'])
    }

  ngOnInit(): void {
  }

}
