package si.academiavss.skupinaB.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import si.academiavss.skupinaB.forms.User;
import si.academiavss.skupinaB.utils.UsersUtils;

import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api/users")
public class UserController {
	@Autowired
	UsersUtils usersUtils;

	@GetMapping("/list")
	public List<User> getAllUsers(){
		System.out.println("Getting all users...");

		List<User> users = new ArrayList<>();
		usersUtils.findAll().forEach(users::add);

		return users;
	}

	@PostMapping("/adduser")
	public User addUser(@RequestBody User user){
		System.out.println("Saving user to DB: " + user + "...");
		User newUser = usersUtils.save(new User(user.getUsername(), user.getEmail(), user.getPassword(), user.getTelephone(), user.getDate(), user.getType()));
		return newUser;
	}

	@DeleteMapping("/deleteuser/{id}")
	public ResponseEntity<String> deleteUser (@PathVariable("id") long id) {
		System.out.println("Deleting user with id: " + id + "...");

		usersUtils.deleteById(id);
		return new ResponseEntity<>("User has been deleted.", HttpStatus.OK);
	}

	@GetMapping("/getuser/{id}")
	public List<User> findByUsername(@PathVariable long id){
		List<User> users = usersUtils.findById(id);

		return users;
	}
}
