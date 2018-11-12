import CharactersController from "./components/characters/characters-controller.js" //8.


class App { //3. 
  constructor() {
    this.controllers = {
      charactersController: new CharactersController()
    }
  }
}



// @ts-ignore
window.app = new App() //7.