import { useState } from 'react'
import './App.css'

function App() {

  class Media {

    title: string
    author: string
    year: number | null

    constructor(title: string, author: string, year: number | null) {
      this.title = title
      this.author = author
      this.year = year
    }
  }

  let initialBooks: Media[] = [
    new Media("Xx", "Rian Hughes", null)
  ]

  const [books, setBooks] = useState<Media[]>(initialBooks)

  // Find out what type event is here
  const addItemHandler = (event: any) => {
    event.preventDefault()
    // create a new Media item // we need to change the value of the "books" state
    // how do you access the form values? <-
    const entryTitle = event.target[0].value
    let oldState = [...books]
    oldState.push(new Media(entryTitle, "Anisha", 1993))
    setBooks(oldState)
  }

// when we add books, we need to change the state
// since the state is changed, the DOM needs to be updated

  return (
    <>
      <div>
      </div>
      <h1>Books</h1>
      <ul>
        {books.map(book => {
          return (<li> Title: {book.title}, Author: {book.author}{book.year&& `, Year: ${book.year}`} </li>)
        })}

        <li>
          <form onSubmit={addItemHandler}>
            <input name="Title" type="text" />
            <input type="submit" />
          </form>
        </li>

      </ul>

    </>
  )
}

export default App
