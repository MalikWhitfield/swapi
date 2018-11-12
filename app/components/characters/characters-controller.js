import CharactersService from "./characters-service.js" //8.

let _charactersService = new CharactersService() //5.

function _draw() { //11. Gets data from the service, then needs to create a template, needs to loop, set elements with appropriate data
  //Get data from service

  //Create a template
  let charactersTemplate = ''
  let actionsTemplate = ''

  //build action buttons
  if (_charactersService.prev) {
    actionsTemplate += `<button onclick="app.controllers.charactersController.getCharacters('${_charactersService.prev}')">Prev</button>`
  }
  if (_charactersService.next) {
    actionsTemplate += `<button onclick="app.controllers.charactersController.getCharacters('${_charactersService.next}')">Next</button>`
  }

  // loop through characters
  _charactersService.getCharacters.forEach(character => {
    charactersTemplate += `<div class="character">${character.name}</div>`
  })


  document.getElementById('category-title').innerText = "Characters" // 12. 
  document.getElementById('category-description').innerText = "The many chracters of "
  document.getElementById('category-actions').innerHTML = "<button>BUTTONHERE</button>"
  document.getElementById('category-data').innerHTML = "<div>CHARACTER DATA</div>"


}
export default class CharactersController { //4.
  constructor() {
    console.log('characters controller')
    _charactersService.getCharacters(_draw, _drawError)
  }



}