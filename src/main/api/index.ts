import '../config/module-alias'
import { PersonController } from "@/application/controllers"

const p = new PersonController()

console.log(p.speak('aquila'))

console.log(p.speak())