import java.util.Iterator;
import java.util.TreeSet;

public class TestTreeSet {
	public static void main(String[] args) {
		TreeSet<String> mySet = new TreeSet<String>();

       mySet.add("Product A");
       mySet.add("Product B");
       mySet.add("Product C");
       mySet.add("Product A");
       
       Iterator <String> it = mySet.iterator();
       while (it.hasNext()) {
           System.out.println(it.next());
       }
       System.out.println("First product: " + mySet.first());
       System.out.println("Last product: " + mySet.last());
       System.out.println("Size of TreeSet: " + mySet.size());
       mySet.remove("Product B");
       System.out.println("Size of TreeSet after removal: " + mySet.size());
   }
}