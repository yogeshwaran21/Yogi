import java.util.stream.IntStream;

public class Assign7 {
    public static void main(String[] args) {
        int num[]={2,3,4,5,6};

        int min=IntStream.of(num).min().getAsInt();  
        int max=IntStream.of(num).max().getAsInt();  
        
        System.out.println("Maximum : "+max+"\n"+"Minimum : "+min);
    }
}
