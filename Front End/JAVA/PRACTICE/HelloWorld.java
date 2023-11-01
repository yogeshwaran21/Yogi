// public class HelloWorld {
// 	public static void main(String[] args) {
// 		int a=Integer.parseInt(args[0]);
// 		int b=Integer.parseInt(args[1]);
// 		int ans=0;
// 		String c=args[2];
// 		switch(c) {
// 		case "+" :
// 			ans=a+b;
//             break;
// 		case "-" :
// 			ans=Math.abs(a-b);
//             break;
// 		case "^" :
// 			ans=a*b;
//             break;
// 		case "/" :
// 			ans=a/b;
// 		}
// 		System.out.println(ans);
// 	}
// }


// class HelloWorld{
//     public static void main(String[] args) {
//         int n=Integer.parseInt(args[0]);
//         switch(n){
//             case 1:System.out.println("Month is January");break;
//             case 2:System.out.println("Month is February");break;
//             case 3:System.out.println("Month is March");break;
//             case 4:System.out.println("Month is April");break;
//             case 5:System.out.println("Month is May");break;
//             case 6:System.out.println("Month is June");break;
//             case 7:System.out.println("Month is July");break;
//             case 8:System.out.println("Month is August");break;
//             case 9:System.out.println("Month is September");break;
//             case 10:System.out.println("Month is October");break;
//             case 11:System.out.println("Month is November");break;
//             case 12:System.out.println("Month is December");
//         }
//     }
// }

// class HelloWorld{
//     public static void main(String[] arr) {
//         int sum=0;
//         for(String i : arr){
//             int n=Integer.parseInt(i);
//             if(n!=-999){
//                 sum+=n;
//             }
//             else
//             break;
//         }
//         System.out.println(sum);
//     }
// }

// class HelloWorld{
//     public static void main(String[] arr) {
//         int n=Integer.parseInt(arr[0]);
//         int rev=0;
//         if(n>0){
//             while(n>0){
//                 int x=n%10;
//                 rev=rev * 10 + x;
//                 n=n/10;
//             }
//             System.out.println(rev);
//         }
//         else
//         System.out.println("Enter positive integer");

//     }
// }

// public class HelloWorld {
// 	public static void main(String[] args) {
// 		int num=Integer.parseInt(args[0]);
// 		char array[]=String.valueOf(num).toCharArray();
// 		if(num<0)
// 			  System.out.println("Invalid");
// 		  else {
// 		for(int i=0;i<array.length;i++)
// 		{
// 			switch(array[i])
// 			{
// 			case '0':System.out.print("zero ");break;
// 			case '1':System.out.print("one ");break;
// 			case '2':System.out.print("two ");break;
// 			case '3':System.out.print("three ");break;
// 			case '4':System.out.print("four ");break;
// 			case '5':System.out.print("five ");break;
// 			case '6':System.out.print("six ");break;
// 			case '7':System.out.print("seven ");break;
// 			case '8':System.out.print("eight ");break;
// 			case '9':System.out.print("nine ");break;
// 			}
// 		}
// 		  }
// 	}
// }


import java.util.*;

public class HelloWorld {
	public static void main(String[] args) {
		int n;
		System.out.println("Enter a number");
		Scanner scan=new Scanner(System.in);
		n=scan.nextInt();
		int num=n;
		int rev=0;
        int count=0;
        while(n>0){
        if(count<=4){
            int x=n%10;
            rev=rev * 10 + x;
            n=n/10;
            count++;}
        else
            System.out.println("Number exceeded");
          }
         
        if(count==4) {
            System.out.println(rev);

		if(rev==num) {
			System.out.println("Given number is palindrome");
		}
		else {
			System.out.println("Given number is not palindrome");
		}}
        else
        System.out.println("Not a 4 digit number");
scan.close();
}
}