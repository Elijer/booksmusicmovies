# Books, Movies, Music
## Themes
### Generics
While normal parameters have a type and the arguments passed in have values, generics are the opposite. Generics are a type that is passed in as an argument, and the values are the types that are passed in

### UseState
If we have `const [books, setBooks] = useState<Media[]>(initialBooks)`, we can't mutate `books` directly. We can only change it using the `setBooks` handler. So if we want to change it, the most concise way we can do that is probably like this: `setBooks([...books, newBook])`. This will create a new array with the old books and the new book, and then set that as the new state.

### Forms in Typescript/React
```jsx
function smolForm(){

  const handler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("input was " + event.target.value)
  }

  return (
    <form onSubmit={handler}>
      <input name="Title" type="text" />
      <input type="submit" />
    </form>
  )

}
```

### Conditonal Rendering in React
A trick in JSX is to use `&&` to conditionally render elements. For example, if you want to render a button only if a condition is met, you can do this:
```jsx
{condition && <button>Click me</button>}
```

It's sort of weird, but if `condition` is false, then the second condition isn't returned.

This seems weird to me, but I guess that what's happening is that `condition` is just evaluating to a boolean value, where any html is evaluated by JSX to be valid html, and so it gets returned. To clarify this, if we did this:

```jsx
{<h1>hi</h1> && <button>Click me</button>}
```

Both the `h1` and the `button` would be returned, because both are valid html.

### .Map vs. .forEach
When iterating through elements in JSX, .map() is preferred over .forEach() because it returns a new array. .forEach() does not return anything. This kind of goes back up to the point above about Conditional rendering -  .map() returns an array of elements, which can be conditionally rendered. Whereas because `forEach` just mutates the array in place, there's no values to be returned, just side effects.