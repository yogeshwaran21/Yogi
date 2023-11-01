import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

public class Assign4 {
    public static void main(String[] args) {
        // List<Integer> num=new ArrayList<Integer>();
		// num.add(12);
		// num.add(11);
		// num.add(12);
		// num.add(13);
		// num.add(11);

         int num[]={2,4,4,6,6,4,5,7,8,8,9,8};
        int[] result=IntStream.of(num).distinct().sorted().toArray();
        for(int i:result)

        // List result=num.stream().distinct().toList();
        System.out.println(i);
    }
}
