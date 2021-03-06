import { films } from '../data/films.js'
import { getLastNumber } from '../utils/index.js'


const main = document.querySelector('main')



for (let step = 0; step < 7; step++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg` 
    let figCaption = document.createElement('figcaption')
    
    const foundFilm = films.find(film => getLastNumber(film.url) == (step + 1))
    figCaption.textContent = foundFilm.title

    figure.appendChild(figImg)
    figure.appendChild(figCaption)
    

    main.appendChild(figure)
  }

/* for (const film of films) {
    let newImg = document.createElement('img') //new image instance
    newImg.src = 'https://starwars-visualguide.com/assets/img/films/1.jpg' // set the source of it or nothing will show
    // now append the image to the DOM somehow
    main.appendChild(newImg)
    console.log(film.title)
} */



//https://starwars-visualguide.com/assets/img/characters/2.jpg