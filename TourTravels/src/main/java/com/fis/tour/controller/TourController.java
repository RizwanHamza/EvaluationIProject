package com.fis.tour.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fis.tour.entity.TourPackage;
import com.fis.tour.repo.TourTravelsRepo;

@RestController
@CrossOrigin(origins = "*", allowedHeaders="*")
@RequestMapping("/")
public class TourController {
	@Autowired
	private TourTravelsRepo repo;
	
	@PostMapping("/addPackage")
	public ResponseEntity<?> addpackages(@RequestBody TourPackage tp){
		if(tp != null) {
			repo.save(tp);
			return ResponseEntity.ok(tp);
		}
		else
			return (ResponseEntity<?>)ResponseEntity.noContent();
	}
	
	@GetMapping("/cost")
	public double getCost(@RequestParam String package_id,@RequestParam String day) {
		double package_amount = 0.0,discount = 0.0;
		int days = Integer.valueOf(day);
		TourPackage tp = repo.getById(package_id);
		if(tp!=null) {
			double basic_fare = tp.getBasic_fare();
			package_amount = basic_fare*days;
			if(days <= 5)
				discount = 0;
			else if(days <= 8)
				discount = .03 * package_amount;
			else if(days <= 10)
				discount = .05 * package_amount;
			else
				discount = 0.07 * package_amount;
			package_amount = (package_amount - discount) + (package_amount - discount)*.12;
			return package_amount;
			
		}
	System.out.println("Package does not exist");
	return 0.0;
	}
	
	@GetMapping("/price")
	public double getPrice(@RequestParam String source_place, @RequestParam String destination_place,@RequestParam String day) {
		double package_amount = 0.0,discount = 0;
		int days = Integer.valueOf(day);
		TourPackage tp = repo.getBysource_placeanddestination_place(source_place,destination_place);
		if(tp!=null) {
			double basic_fare = tp.getBasic_fare();
			package_amount = basic_fare*days;
			if(days <= 5)
				discount = 0;
			else if(days <= 8)
				discount = .03 * package_amount;
			else if(days <= 10)
				discount = .05 * package_amount;
			else
				discount = 0.07 * package_amount;
			package_amount = (package_amount - discount) + (package_amount - discount)*.12;
			return package_amount;
			
		}
	System.out.println("Package does not exist");
	return 0.0;
	}
	
	@GetMapping("/explore")
	public List<TourPackage> getPackages() {
		return repo.findAll();
	}

}
