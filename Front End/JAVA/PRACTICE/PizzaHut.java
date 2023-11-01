
import java.util.*;
public class PizzaHut {
 
	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);		
		CustomerReport customerReport = new CustomerReport(3);
		//with parameterized
		for(int cust_count=0;cust_count<3;cust_count++)
		{	
			System.out.println("Enter the Customer Name : ");
			String cust_Name=sc.nextLine();
			System.out.println("Enter the Customer Address :");
			String cust_Address=sc.nextLine();
			
			Customer customer=new Customer(cust_Name,cust_Address);
			Customer.printBillNo();
			System.out.print("\tDate:"+new Date());
			customer.display();
			customerReport.addCustomer(customer);
		}
		System.out.println("\n Customer Report : ");
		customerReport.printList();
		//without parameterized
		//Customer default_customer=new Customer();
		
		
		//default_customer.display();
		
		//customer.display();	
		
		 while (true) {
	            System.out.println("Choose an option:\n1. Italian Pizza\n2. Mexican Pizza");
	            int choice = sc.nextInt();
                if(choice==3){
                System.out.println("Exit");break;
            }
 
	            System.out.print("Enter pizza name: ");
	            sc.nextLine(); // Consume the newline character
	            String name = sc.nextLine();
 
	            System.out.print("Enter type (veg or non-veg): ");
	            String type = sc.nextLine();
 
	            System.out.print("Enter toppings (comma-separated): ");
	            String[] toppings = sc.nextLine().split(", ");
 
	            System.out.print("Enter time for preparation (in minutes): ");
	            float timeForPreparation = sc.nextFloat();
                sc.nextLine();

                System.out.println("Enter the size");
                String size=sc.nextLine();
 
	            Pizza pizza=null;
 
				if (choice == 1) {
					try {
						pizza = new ItalianPizza(type, toppings, name, timeForPreparation,size);
				  
					} catch (InvalidPizzaTypeException | InvalidPizzaSizeException e) {
						System.out.println("Exception: " + e.getMessage());
					}
				
			  }
	            // } else {
	            //     pizza = new MexicanPizza(type, toppings, name, timeForPreparation);
	            // }
 
	            System.out.println(pizza.toString());
	        }   
	}
}

class Customer{
	private int custNo;
	private String custName ;
	private String custAddr ;
	private static int billNo=0;
	
	// customer constructor for initialization
	
	public Customer(String custName, String custAddr) {
		super();
		this.custNo = ++billNo;
		this.custName = custName;
		this.custAddr = custAddr;
	}
 
 
//	public Customer() {
//		
//		custNo=0;
//		custName="Default Name";
//		custAddr="Default Address";
//	}
	
	
	public int getCustNo() {
		return custNo;
	}
	public void setCustNo(int custNo) {
		this.custNo = custNo;
	}
	public String getCustName() {
		return custName;
	}
	public void setCustName(String custName) {
		this.custName = custName;
	}
	public String getCustAddr() {
		return custAddr;
	}
	public void setCustAddr(String custAddr) {
		this.custAddr = custAddr;
	}
	
	public void display() {
        // Display customer details
        System.out.println("Customer Number: " + custNo);
        System.out.println("Customer Name: " + custName);
        System.out.println("Customer Address: " + custAddr);
    }
	public static void printBillNo()
	{
		System.out.println("Bill No :"+billNo);
	}
}
class CustomerReport {
	   private Customer[] custList;
 
	    public CustomerReport(int size) {
	        custList = new Customer[size];
	    }
	    public void addCustomer(Customer customer) {
	        for (int i = 0; i < custList.length; i++) {
	            if (custList[i] == null) {
	                custList[i] = customer;
	                break;
	    }
	}
}
	    public void printList() {
	        for (Customer customer : custList) {
	            if (customer != null) {
	                customer.display();
	        }
	    }
	}
}

