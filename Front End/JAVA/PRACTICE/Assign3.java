import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

public class Assign3 {
    public static void main(String[] args) {
        // List<Integer> num=new ArrayList<Integer>();
		// num.add(3);
		// num.add(21);
		// num.add(4);
		// num.add(10);
		// num.add(13);

         int num[]={2,3,4,5,6};
        int even=IntStream.of(num).filter(n -> n % 2 == 0).sum();
        int odd=IntStream.of(num).filter(n -> n % 2 != 0).sum();
        // int even=num.stream().filter(n -> n % 2 == 0).mapToInt(Integer::intValue).sum();
        // int odd=num.stream().filter(n -> n % 2 != 0).mapToInt(Integer::intValue).sum();

        System.out.println("Sum of Even and Odd Numbers are "+ even + " and "+ odd );
    }
}
