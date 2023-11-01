public class ItalianPizza extends Pizza {
        int cost=0;
        boolean addtoppings;
        public ItalianPizza(String type, String[] toppings, String name, float timeForPreparation,String size)throws
        InvalidPizzaTypeException, InvalidPizzaSizeException{
            super(type, toppings, name, timeForPreparation,size);
        }
        public int calculateCost(){
            if(type.equals("veg")){
                if(size.equals("small")){
                    cost=200;
                }
                else if(size.equals("medium")){
                    cost=350;
                }
            }
            if(addtoppings){
                cost+=30;
            }
            return cost;
        }
        
        public String toString() {
            return "Italian " + super.toString() + calculateCost();
        }
    }