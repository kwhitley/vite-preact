import { Logo } from './logo'
import { Counter } from './components/Counter'
import { Book } from './components/Book'

export function App(props) {
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>

        <br />

        <Counter />

        <br />

        <Book />
      </p>
    </>
  )
}
