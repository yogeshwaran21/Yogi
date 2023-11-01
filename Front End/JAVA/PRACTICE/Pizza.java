public abstract class Pizza {
    protected String type;
    protected String[] toppings;
    protected String name;
    protected float timeForPreparation;
    protected String size;
 
    public Pizza(String type, String[] toppings, String name, float timeForPreparation,String size)throws
    InvalidPizzaTypeException, InvalidPizzaSizeException {
        if (!isValidPizzaType(type)) {
                throw new InvalidPizzaTypeException("Invalid pizza type: " + type);
        }
        if (!isValidPizzaSize(size)) {
                throw new InvalidPizzaSizeException("Invalid pizza size: " + size);
        }

    this.type = type;
    this.toppings = toppings;
    this.name = name;
    this.timeForPreparation = timeForPreparation;
    this.size = size;
    
}
  private boolean isValidPizzaType(String type) {
        return type.equals("veg") || type.equals("Non-veg") || type.equals("Vegetarian");
    }

    private boolean isValidPizzaSize(String size) {
        return size.equals("small")|| size.equals("medium");
    }
    public abstract int calculateCost();

    @Override
    public String toString() {
        StringBuilder toppingsStr = new StringBuilder();
        if (toppings.length == 0) {
            toppingsStr.append("No toppings");
        } else {
            for (String topping : toppings) {
                toppingsStr.append(topping).append(", ");
            }
           
        }
 
        return "Pizza Details:\n" +
                "Type: " + type + "\n" +
                "Toppings: " + toppingsStr.toString() + "\n" +
                "Name: " + name + "\n" +
                "Time for Preparation: " + timeForPreparation + " minutes";
    }
}

class InvalidPizzaTypeException extends Exception {
    public InvalidPizzaTypeException(String message) {
        super(message);
    }
}
 
class InvalidPizzaSizeException extends Exception {
    public InvalidPizzaSizeException(String message) {
        super(message);
    }
}
    
 
    // class MexicanPizza extends Pizza {
    //     public MexicanPizza(String type, String[] toppings, String name, float timeForPreparation) {
    //         super(type, toppings, name, timeForPreparation);
    //     }
 
    //     @Override
    //     public String toString() {
    //         return "Mexican " + super.toString();
    //     }
    // }
 


