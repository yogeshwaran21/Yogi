import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Assign6 {
    public static void main(String[] args) {
        List<String> str = new ArrayList<String>();
        str.add("cricket");
        str.add("football");
        str.add("basketball");
        str.add("hockey");
        str.add("rugby");

        List asc=str.stream().sorted().collect(Collectors.toList());
        List desc=str.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList());
        System.out.println("Ascending : "+asc);
        System.out.println("Descending : "+desc);
    }
}
