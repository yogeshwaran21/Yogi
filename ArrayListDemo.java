package work;
import java.util.*;

public class ArrayListDemo {
	public static void main(String[] args) {
		 Students student = new Students();
	        student.setNames();
	        student.searchName("Yogi");
	        student.searchName(1);
	        System.out.println("Student names:");
	        student.printNames();
	        student.removeName("Babu");
	        System.out.println("Updated");
	        student.printNames();

	}
}
