package si.academiavss.skupinaB.utils;

import org.springframework.data.repository.CrudRepository;
import si.academiavss.skupinaB.forms.User;

import java.util.List;

public interface UsersUtils extends CrudRepository<User, Long> {
	List<User> findById(long id);
}
