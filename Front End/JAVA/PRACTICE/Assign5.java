import java.util.ArrayList;
import java.util.List;

public class Assign5 {
    public static void main(String[] args) {
        List<String> str = new ArrayList<String>();
        str.add("cricket");
        str.add("football");
        str.add("basketball");
        str.add("chess");
        str.add("carrom");

        long count = str.stream().filter(e -> e.startsWith("c")).count();
        System.out.println("No. of words with starting c is " + count);
    }
}
