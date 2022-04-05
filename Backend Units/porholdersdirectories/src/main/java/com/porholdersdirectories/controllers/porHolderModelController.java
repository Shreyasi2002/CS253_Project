package com.porholdersdirectories.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.porholdersdirectories.exceptions.ResourceNotFoundException;
import com.porholdersdirectories.models.porHolderModel;
import com.porholdersdirectories.repositories.porHolderModelRepository;

@RestController
public class porHolderModelController {
	
	@Autowired
	private porHolderModelRepository porHolderRepository;
	
	@GetMapping("/getallporholders")
	public List<porHolderModel> getallporholdersdirectories(){
		return porHolderRepository.findAll();
	}
	
	@GetMapping("/getporholderbyid")
	public porHolderModel getporholderbyid(@RequestBody String id){
		porHolderModel ans = porHolderRepository.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		
		return ans;
	}
	
	@PostMapping("/addnewporholder")
	public ResponseEntity<porHolderModel> createnewporholder (@RequestBody porHolderModel porholdermodel){
		porHolderModel porHolderModel = porHolderRepository.save(porholdermodel);
		
		return new ResponseEntity<>(porHolderModel, HttpStatus.CREATED);
	}
	
	@PostMapping("/addnewmultipleporholder")
	public ResponseEntity<List<porHolderModel>> createnewmultipleporholder (@RequestBody List<porHolderModel> porholdermodel){
		List<porHolderModel> porHolderModelList = new ArrayList<>();
		for(porHolderModel p: porholdermodel)
			porHolderModelList.add(porHolderRepository.save(p));
		
		return new ResponseEntity<>(porHolderModelList, HttpStatus.CREATED);
	}
	
	@PutMapping("/modifyporholderbyid")
	public ResponseEntity<porHolderModel> modifyporholderbyid(@RequestPart("porholdermodel") porHolderModel porHolderModel,@RequestParam("id") String id){
		porHolderModel newporHolderModel = porHolderRepository.findById(id)
												.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		if(porHolderModel.getCouncilFestName()!=null)
			newporHolderModel.setCouncilFestName(porHolderModel.getCouncilFestName());
		if(porHolderModel.getClubSectionName()!=null)
			newporHolderModel.setClubSectionName(porHolderModel.getClubSectionName());
		if(porHolderModel.getPositionName()!=null)
			newporHolderModel.setPositionName(porHolderModel.getPositionName());
		if(porHolderModel.getUsername()!=null)
			newporHolderModel.setUsername(porHolderModel.getUsername());
		
		porHolderRepository.save(newporHolderModel);
		
		return new ResponseEntity<>(newporHolderModel, HttpStatus.CREATED);
	}
	
	@PutMapping("/modifymultipleporholderbyid")
	public ResponseEntity<List<porHolderModel>> modifymultipleporholderbyid(@RequestBody List<porHolderModel> porHolderModel){
		List<porHolderModel> porHolderModelList = new ArrayList<porHolderModel>();
		for(porHolderModel p: porHolderModel) {
			porHolderModel newporHolderModel = porHolderRepository.findById(p.getId())
													.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
			if(p.getCouncilFestName()!=null)
				newporHolderModel.setCouncilFestName(p.getCouncilFestName());
			if(p.getClubSectionName()!=null)
				newporHolderModel.setClubSectionName(p.getClubSectionName());
			if(p.getPositionName()!=null)
				newporHolderModel.setPositionName(p.getPositionName());
			if(p.getUsername()!=null)
				newporHolderModel.setUsername(p.getUsername());
			porHolderModelList.add(newporHolderModel);
			porHolderRepository.save(newporHolderModel);
		}
		return new ResponseEntity<>(porHolderModelList, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deleteporholderbyid")
	public ResponseEntity<porHolderModel> deleteporholderbyid(@RequestBody String id){
		porHolderModel porholderdeleted = porHolderRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundException("No PoR Holder with id:" + id));
		porHolderRepository.delete(porholderdeleted);
		
		return new ResponseEntity<>(porholderdeleted, HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/deleteallporholders")
	public ResponseEntity<porHolderModel> deleteallporholders(){
		porHolderRepository.deleteAll();
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
