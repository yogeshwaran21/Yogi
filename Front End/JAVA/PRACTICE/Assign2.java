import java.util.ArrayList;
import java.util.List;


public class Assign2 {
    public static void main(String[] args) {
        List<String> str=new ArrayList<String>();
		str.add("i");
		str.add("am");
		str.add("yogesh");

		List result= str.stream().map(e->e.toUpperCase()).toList();
        System.out.println(result);
    }
    
}
