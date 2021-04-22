import { useEffect, useState } from 'preact/hooks'
import styled from 'styled-components'

const StyledBook = styled.main`
  font-size: 1em;
  color: #222;
  display: inline-block;
  padding: 1em 2.5em 2em 2em;
  background-color: #eee;
  transition: all 0.1s ease;
  user-select: none;
  margin-top: 2em;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.5);
  }
`

const Description = styled.p`
  font-size: 0.8em;
  text-align: left;
  columns: 2;
  column-gap: 2em;
  max-width: 40em;
`

export const Book = () => {
  const [ book, setBook ] = useState()

  useEffect(() => {
    fetch('https://openlibrary.org/works/OL45883W.json').then(r => r.json()).then(setBook)
  }, [])

  if (!book) return null

  return (
    <StyledBook>
      <h1>{ book.title }</h1>
      <Description>{ book.description }</Description>
    </StyledBook>
  )
}

export default Book
