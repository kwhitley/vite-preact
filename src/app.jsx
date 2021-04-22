import { Logo } from './logo'
import { Counter } from './components/Counter'
import { lazy, Suspense } from 'preact/compat'

const Book = lazy(() => import('./components/Book'))

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

        <Suspense><Book /></Suspense>
      </p>
    </>
  )
}
