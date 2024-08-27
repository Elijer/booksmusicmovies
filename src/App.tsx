import { useState } from 'react'
import './App.css'

function App() {

  class Media {

    title: string
    author: string | null
    year: number | null

    constructor(title: string, author: string | null, year: number | null) {
      this.title = title
      this.author = author
      this.year = year
    }
  }

  let initialBooks: Media[] = [
    new Media("Xx", "Rian Hughes", null)
  ]

  const [books, setBooks] = useState<Media[]>(initialBooks)
  const [editedIndex, setEditedIndex] = useState<number|null>(null)

  const addItemHandler = (event: any) => {
    event.preventDefault()
    const mediaTitle = event.target[0]
    const mediaAuthor = event.target[1]
    const mediaYear = event.target[2]
    let newMedia = new Media(mediaTitle.value, mediaAuthor.value, mediaYear.value)
    setBooks((oldState: Media[]) => [...oldState, newMedia])
    mediaTitle.value = ""
    mediaAuthor.value = ""
    mediaYear.value = ""
  }

  const deleteMedia = (index: number) => {
    setBooks((oldState: Media[]) => [...oldState.slice(0, index), ...oldState.slice(index+1, oldState.length)])
  }

  const editMedia = (index: number) => {
    setEditedIndex(index)
    // console.log('hi')
  }

  const handleDoneEditingMedia = (event: any) => {
    event.preventDefault()
    // in here we have to
    // set the editIndex back to null
    // And also change our book list thing state to add the new form information
    if (editedIndex == null) return
    try {
      let newBook = new Media(event.target[0].value, event.target[1].value || null, Number(event.target[2].value) || null)
      setBooks((oldBooks: Media[]) => {
        oldBooks[editedIndex] = newBook
        return [...oldBooks]
      })
    } catch (e){
      console.log("Problem creating new book", e)
    }
    
    setEditedIndex(null)
    
  }

  return (
    <>
      <h1>Books</h1>
      <ul>

        {
          books.map((book, bookIndex) => {
            
            if (editedIndex === bookIndex) return (
              <>
                <li> 
                <form onSubmit={handleDoneEditingMedia}>
                  <input name="Title" type="text" placeholder={book.title} required/>
                  <input name="Author" type="text" placeholder={book.author ?? 'author'} />
                  <input name="Year" type="text" placeholder={book.year?.toString() ?? 'year'}/>
                  <input type="submit" />
                </form>
                </li>
              </>
            )

            return (
              <li>
                <span>Title: {book.title}, Author: {book.author}{book.year&& `, Year: ${book.year}`}</span>
                <button onClick={() => editMedia(bookIndex)}>edit</button>
                <button onClick={() => deleteMedia(bookIndex)}>delete</button>
              </li>
            )

          })
        }

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

// Next Stepssss
//// adding the next fields in the form
// editing 
// replacing the media record in line with a form????
////and deleting!
// reset value to an empty string upon submission


// Questions
// Why are we able to pass a string to the number typed parameter "year" in our Media constructor? That's wild.
// What do we do when it's the first number we're trying to delete and the last number - as far as 