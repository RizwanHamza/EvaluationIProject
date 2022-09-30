package com.fis.tour.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class TourPackage {
	
	@Id
	@Size(min=7, max=7)
	private String package_id;
	@Column(length=25)
	private String source_place;
	private Double basic_fare;
	@Column(length=25)
	private String destination_place;
	public String getPackage_id() {
		return package_id;
	}
	public void setPackage_id(String package_id) {
		this.package_id = package_id;
	}
	public String getSource_place() {
		return source_place;
	}
	public void setSource_place(String source_place) {
		this.source_place = source_place;
	}
	public Double getBasic_fare() {
		return basic_fare;
	}
	public void setBasic_fare(Double basic_fare) {
		this.basic_fare = basic_fare;
	}
	public String getDestination_place() {
		return destination_place;
	}
	public void setDestination_place(String destination_place) {
		this.destination_place = destination_place;
	}
	
}
