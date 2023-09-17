import '../config/module-alias'
import { PersonController, Speaker } from "@/application/controllers"

const p = new PersonController(1)

class Server {
  init(speaker: Speaker){
    console.log(speaker.speak('rodrigo'))
    console.log(speaker.speak())
  }
}

const server = new Server()
server.init(p)