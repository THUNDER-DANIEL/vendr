import VendingMachine from "./Models/VendingMachine.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

total=0
    /**@type {VendingMachine}*/
  VendingMachine = new VendingMachine("FoodBox", 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ac6224d-074e-4d19-b1ff-f4fbcf7732b8/d97yqz7-d9c1fdd5-62e0-4e27-bad6-0ac19acdf642.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOWFjNjIyNGQtMDc0ZS00ZDE5LWIxZmYtZjRmYmNmNzczMmI4XC9kOTd5cXo3LWQ5YzFmZGQ1LTYyZTAtNGUyNy1iYWQ2LTBhYzE5YWNkZjY0Mi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.fVSPQh6ghQuodL0PJVfyCcQE7L1aOMF3vrOnZSKki_w', 25)
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
