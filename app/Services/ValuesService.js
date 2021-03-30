import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";


// one class
class ValuesService{
  twentyFive(){
    console.log("Service WORKING I HOPE")
    ProxyState.total+=.25
    // ProxyState.VendingMachine = ProxyState.VendingMachine
  }




}






export const valuesService = new ValuesService();

