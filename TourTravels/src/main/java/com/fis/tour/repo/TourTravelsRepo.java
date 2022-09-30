package com.fis.tour.repo;

import javax.persistence.TypedQuery;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fis.tour.entity.TourPackage;

@Repository
public interface TourTravelsRepo extends JpaRepository<TourPackage,String>{

	@Query("select u from TourPackage u where u.source_place=?1 and u.destination_place=?2")
	public TourPackage getBysource_placeanddestination_place(String source_place, String destination_place);
	
}
