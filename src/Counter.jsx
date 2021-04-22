import { useState } from 'preact/hooks'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
  margin-top: 1em;
  font-size: 2em;
  cursor: pointer;
  transition: all 0.1s ease;
  user-select: none;

  &:hover {
    transform: scale(1.2);
  }
`

export const Counter = () => {
  const [ value, setValue ] = useState(10)
  const increment = () => setValue(value + 1)

  return (
    <Container onClick={increment}>
      { value }
    </Container>
  )
}
