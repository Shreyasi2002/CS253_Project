package com.clubzen.controllers;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.security.crypto.bcrypt.BCrypt;
import com.clubzen.exceptions.ResourceNotFoundException;
import com.clubzen.models.UserModel;
import com.clubzen.models.porHolderModel;
import com.clubzen.repositories.UserRepository;
import com.clubzen.repositories.porHolderModelRepository;
import com.clubzen.models.ForumCommentModel;
import com.clubzen.models.ForumContentModel;
import com.clubzen.models.ForumModel;
import com.clubzen.repositories.ForumRepository;

@RestController
@CrossOrigin(origins = "*")
@Validated
@EnableWebMvc
public class clubzenController {

	UserModel user = new UserModel();
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	porHolderModelRepository porHolderRepository;
	
	@Autowired
	private ForumRepository forumRepository;
	
	int logRounds = 20;
	String passwordHash = BCrypt.hashpw("samplehashablepasswordforencoder", 
											BCrypt.gensalt(logRounds));;

	
	//UserModel Mappings
	
	@GetMapping("/getallusers")
	public ResponseEntity<List<UserModel>> getallusers(){
	    
	    return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/getuserbyid")
	public ResponseEntity<?> getuserbyid(@RequestBody String id) {
		UserModel ans = userRepository.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

		return new ResponseEntity<>(ans, HttpStatus.FOUND);
	}
        
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody UserModel userModel) {
        List<UserModel> userList = userRepository.findAll();
        String encodedPassword = BCrypt.hashpw(userModel.getPassword(), BCrypt.gensalt());
	
        for(UserModel u: userList){
            if(u.getUsername().equals(userModel.getUsername())){
                if(!u.getPassword().equals(encodedPassword)){
                	
                    return new ResponseEntity<>(u, HttpStatus.NOT_ACCEPTABLE);
                }
            	user = u;
            	
                return new ResponseEntity<>(u, HttpStatus.ACCEPTED);
            }
        }
        
        return new ResponseEntity<>(userModel,HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/signout")
	public ResponseEntity<?> disableUser(@RequestBody UserModel userModel) {
		if(userModel.getUsername().equals(user.getUsername()) &&
                userModel.getPassword().equals(user.getPassword())){
        	user = null;
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
		user = null;
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody UserModel userModel) {
        List<UserModel> userList = userRepository.findAll();

        for(UserModel u: userList){
            if(u.getUsername().equals(userModel.getUsername()) ||
                    u.getEmail().equals(userModel.getEmail()))
                return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
		
		String domainName = "";
		String usermailname = "";
		String[] parts = userModel.getEmail().split("@");
		if(parts.length == 2) {
		    domainName = parts[1];
		    usermailname = parts[0];
		}
		if (!domainName.equals("iitk.ac.in")) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
		if (!usermailname.equals(userModel.getUsername())) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
		
		List<porHolderModel> porHoldersList = porHolderRepository.findAll();
		List<String> roles = new ArrayList<String>();
		Boolean roleAvailable = false;
		
		for(porHolderModel p:porHoldersList) {
			if(p.getUsername().equals(userModel.getUsername())) {
				//userModel.setRole(p.getPositionName());
				roles.add(p.getPositionName());
				roleAvailable = true;
				break;
			}
		}
		if(roleAvailable == false)
			//userModel.setRole("General");
			roles.add("General");
		
		if(roles.get(0) != "General")
			roles.add("admin");
		else
			roles.add("user");
		
		userModel.setRole(roles);
		
		userModel.setPassword(BCrypt.hashpw(userModel.getPassword(), BCrypt.gensalt()));

		UserModel user = userRepository.save(userModel);

		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}
	
	@PutMapping("/modifyuserbyid")
	public ResponseEntity<?> modifyuserbyid(@RequestPart("usermodel") UserModel userModel,
            @RequestPart String id) {
		UserModel ans = userRepository.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		
        ans.setFullname(userModel.getFullname());
        ans.setPassword(userModel.getPassword());
        
        userRepository.save(ans);
        
        return new ResponseEntity<>(ans, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deleteuserbyid")
	public ResponseEntity<?> deleteuserbyid(@RequestBody String id) {
		UserModel ans = userRepository.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		
        userRepository.deleteById(ans.getId());
        
        return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
        
    @DeleteMapping("/deleteallusers")
	public ResponseEntity<?> deleteallUsers() {
            userRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.CREATED);
	}
    
        
        

    
    //PoRHoldersDirectory Mappings
    
    //porHoldersDirectory Mapping
    @GetMapping("/getallporholders")
	public List<porHolderModel> getallporholdersdirectories(){
		return porHolderRepository.findAll();
	}
	
	
	@GetMapping("/getporholderbyid")
	public ResponseEntity<?> getporholderbyid(@RequestBody String id){
		porHolderModel ans = porHolderRepository.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		
		return new ResponseEntity<>(ans, HttpStatus.FOUND);
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
	
	
	
	//Forum Mappings
	
	@GetMapping("/getallforums")
	public List<ForumModel> getallforums(){
	    /*
	    try{
	    	if(user == null) {
	    		throw new NullPointerException("no user currently logged in");
	    	}
	    }catch(Exception e) {
	    	return null;
	    }
	    */
		List<ForumModel> list = forumRepository.findAll();
		return list;
	}
	
	@GetMapping("/getforumbyid")
	public ForumModel getforumbyid(@RequestBody String id){
		ForumModel forum = forumRepository.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		return forum;
	}
	
	@PostMapping(path = "/addnewforum")
	public ResponseEntity<ForumModel> addnewforum(@RequestPart("forummodel") ForumModel forumModel,
									@RequestParam(name = "file", required = false) MultipartFile file) throws IOException{
		
		ForumContentModel contentModel = new ForumContentModel();
		contentModel.setContent(forumModel.getContent().getContent());
		if(file!=null)
			contentModel.setPicture(Base64.getEncoder().encodeToString(file.getBytes()));
		
		forumModel.setContent(contentModel);
		forumRepository.save(forumModel);
		
		return new ResponseEntity<>(forumModel, HttpStatus.CREATED);
	}
	
	@PutMapping("/modifyforumbyid")
	public ResponseEntity<ForumModel> modifyforum(@RequestPart("contentmodel") ForumContentModel contentModel,
			                                      @RequestPart("id") String id){

		if(contentModel.getContent()==null) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		
		ForumModel forumModel = forumRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No Forum by id :" + id));
		
		forumModel.setContent(contentModel);
		forumRepository.save(forumModel);
		
		return new ResponseEntity<>(forumModel, HttpStatus.CREATED);
	}
	
	@SuppressWarnings("unchecked")
	@PutMapping("/addcommenttoforumbyid")
	public ResponseEntity<ForumModel> addcommenttoforum(@RequestPart("comment") ForumCommentModel comment,
			                                      @RequestPart("id") String id){

		if(comment==null) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		
		ForumModel forumModel = forumRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No Forum by id :" + id));
		
		Date date = new Date();
	    SimpleDateFormat ft = 
	    	      new SimpleDateFormat ("dd.MM.yyyy 'at' hh:mm:ss a zzz");
	  
	    String datetime = ft.format(date);
	    String _date = datetime.substring(0,10);
	    String _time = datetime.substring(15,29);
	    comment.setDate(_date);
	    comment.setTime(_time);
		
		List<ForumCommentModel> commentsList = forumModel.getCommentsList();
		if(commentsList==null)
			commentsList = new ArrayList<>();
		
		comment.setId(commentsList.size()+1);
		commentsList.add(comment);
		
		forumModel.setCommentsList(commentsList);
		forumRepository.save(forumModel);
		
		return new ResponseEntity<>(forumModel, HttpStatus.CREATED);
	}
	
	@SuppressWarnings("unchecked")
	@PutMapping("/modifycommentinforumbyid")
	public ResponseEntity<ForumModel> modifycommentinforum(@RequestPart("comment") ForumCommentModel comment,
			                                      @RequestPart("id") String id){

		if(comment==null) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		
		ForumModel forumModel = forumRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No Forum by id :" + id));
		
		Date date = new Date();
	    SimpleDateFormat ft = 
	    	      new SimpleDateFormat ("dd.MM.yyyy 'at' hh:mm:ss a zzz");
	  
	    String datetime = ft.format(date);
	    String _date = datetime.substring(0,10);
	    String _time = datetime.substring(15,29);
	    ForumCommentModel newcomment = new ForumCommentModel();
	    newcomment.setUsername(comment.getUsername());
	    newcomment.setComment(comment.getComment());
	    newcomment.setId(comment.getId());
	    newcomment.setDate(_date);
	    newcomment.setTime(_time);
		
		List<ForumCommentModel> commentsList = forumModel.getCommentsList();
		int flag=0;
		for(ForumCommentModel cm: commentsList) {
			if(cm.getId() == comment.getId() &&
					cm.getUsername().equals(comment.getUsername())) {
				commentsList.remove(commentsList.indexOf(cm));
				flag=1;
				break;
			}
		}
		if(flag==0) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		commentsList.add(newcomment);
		
		forumModel.setCommentsList(commentsList);
		forumRepository.save(forumModel);
		
		return new ResponseEntity<>(forumModel, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deleteforumbyid")
	public ResponseEntity<ForumModel> deleteallforums(@RequestBody String id){
		ForumModel forumDeleted = forumRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No Forum by id :" + id));
		
		forumRepository.delete(forumDeleted);
		
	    return new ResponseEntity<>(forumDeleted, HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping("/deleteallforums")
	public ResponseEntity<ForumModel> deleteallforums(){
		forumRepository.deleteAll();
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
}
