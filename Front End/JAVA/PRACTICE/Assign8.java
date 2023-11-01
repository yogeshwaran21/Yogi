import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
 
public class Assign8 {
    public static void main(String[] args) {
        List<Integer> num = Arrays.asList(1,2,3,4,5,6,7,8);
 
        List<Integer> sort = num.stream()
            .distinct()
            .sorted()
            .collect(Collectors.toList());
 
        if (sort.size() >= 2) {
            int secSmall = sort.get(1);
            int secLarge = sort.get(sort.size() - 2);
            System.out.println("Second smallest: " + secSmall);
            System.out.println("Second largest: " + secLarge);
        } else {
            System.out.println("Not enough unique elements to find second smallest and largest.");
        }
    }
}