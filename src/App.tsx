import { useState } from 'react'
import './App.css'

function App() {

  class Media {

    title: string
    author: string | null
    year: number | null

    constructor(title: string, author: string | nulls, year: number | null) {
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
    const mediaTitle = event.target[0].value
    const mediaAuthor = event.target[1].value
    const mediaYear = event.target[2].value
    let newMedia = new Media(mediaTitle, mediaAuthor, mediaYear)
    setBooks((oldState: Media[]) => [...oldState, newMedia])
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
            <input name="Title" type="text" placeholder='Title' required/>
            <input name="Author" type="text" placeholder='Author' />
            <input name="Year" type="text" placeholder='Year'/>
            <input type="submit" />
          </form>
        </li>

      </ul>
    </>
  )
}

export default App

/* Next Stepssss
 adding the next fields in the form 
s editing and deleting!
*/