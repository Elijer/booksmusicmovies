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

  const addItemHandler = (event: any) => {
    event.preventDefault()
    const entryTitle = event.target[0].value
    let oldState = [...books]
    oldState.push(new Media(entryTitle, "Anisha", 1993))
    setBooks(oldState)
  }

  return (
    <>
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
