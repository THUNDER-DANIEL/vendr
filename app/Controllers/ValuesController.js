import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";


//Private
function _draw() {
  let values = ProxyState.values;
  let VendingMachine = ProxyState
  document.getElementById("Machine").innerHTML=`    
  <div class="card">
  <img class="card-img-top" src="${VendingMachine.imgUrl}" alt="" style="width: 50vw">
  <div class="card-body">
    <h4 class="card-title">${VendingMachine.name}</h4>
    <p class="card-text">Health: ${VendingMachine.price}</p>
  </div>
</div>`

  let template = ''
  values.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
  <div className="card-columns values">
      ${template}
  </div>
  `
}
function updateTotal(){
  console.log(ProxyState.total)
}

//Public
export default class ValuesController {
  constructor() {
    ProxyState.on(`total`, updateTotal);
    // _draw()
  }

  twentyFive(type){
    valuesService.twentyFive(type)
    console.log("Inside the Controller")
  }

  addValue() {
    valuesService.addValue()
  }

}
