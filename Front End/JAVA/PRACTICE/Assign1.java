import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;

public class Assign1 {
    public static void main(String[] args) {
        // List<Integer> num=new ArrayList<Integer>();
		// num.add(12);
		// num.add(22);
		// num.add(32);
		// num.add(13);
		// num.add(11);

        int num[]={2,3,4,5,6};
        double avg=IntStream.of(num).average().getAsDouble();
		
		// double avg=num.stream().mapToDouble(Integer::doubleValue).average()
		// .orElse(0);
		System.out.println(avg);

    }
    
}
