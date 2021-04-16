package si.academiavss.skupinaB.forms;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Getter
	@Setter
	@Column(name = "username")
	private String username;

	@Getter
	@Setter
	@Column(name = "email")
	private String email;

	@Getter
	@Setter
	@Column(name = "password")
	private String password;

	@Getter
	@Setter
	@Column(name = "telephone")
	private String telephone;

	@Getter
	@Setter
	@Column(name = "date")
	private Date date;

	@Getter
	@Setter
	@Column(name = "type")
	private String type;

	public User(){

	}

	@Override
	public String toString() {
		return "User{" +
				"id=" + id +
				", username='" + username + '\'' +
				", email='" + email + '\'' +
				", password='" + password + '\'' +
				", telephone='" + telephone + '\'' +
				", date=" + date +
				", type='" + type + '\'' +
				'}';
	}

	public User(String username, String email, String password, String telephone, Date date, String type) {
		this.username = username;
		this.email = email;
		this.password = password;
		this.telephone = telephone;
		this.date = date;
		this.type = type;
	}
}
