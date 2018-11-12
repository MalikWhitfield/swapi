
let charactersAPI = axios.create({ //15.
  baseURL: ""
})

let _characters = [] //14. 
let nextUrl = "" // 16.
let prevUrl = ""

export default class CharactersService { //6.
  constructor() {
    console.log('characters service')
  }

  get characters() {
    return _characters
  }

  get next() {
    return nextUrl
  }

  get prev() {
    return prevUrl
  }
  getCharacters(success, fail) { // 15.
    charactersAPI.get('') //17.
      .then(res => {
        _characters = res.data.results
        nextUrl = res.data.next
        prevUrl = res.data.previous
        success()
      })
      .catch(error => {
        fail(error)
        console.log(error)
      })
    console.log('The Request has been sent')

  }
}