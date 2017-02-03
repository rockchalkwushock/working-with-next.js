# working-with-next.js

## Notes

- Next.js expects a _pages/_
- `next` will generate _.next/_ which holds the bundles.
- Files in _pages/_ should be looked at as _routes_ in the application.
- Any file in _pages/_ should be a function **PERIOD**.

### Routing
- Routing is handled by `next/router`.
```javascript
import Router from 'next/router'

export default () => (
  <div>Click <span onClick={() => Router.push('/about')}>here</span> to read more</div>
)
```
- `next/link` is just like `<Link/>` from `react-router`.
- _pages/index.js_ should be thought of as '/' route with any subsequent files being specific routes _pages/about.js_ === '/about'.
- Next.js exposes a module that configures a ServiceWorker automatically to prefetch pages: `next/prefetch`.
```javascript
import Link from 'next/prefetch'
// example header component
export default () => (
  <nav>
    <ul>
      <li><Link href='/'><a>Home</a></Link></li>
      <li><Link href='/about'><a>About</a></Link></li>
      <li><Link href='/contact'><a>Contact</a></Link></li>
    </ul>
  </nav>
)
```
### Data-Fetching & Redux
- Next.js gives us `getInitialProps` as a pre-defined method on `React.Component`.
- This will provide _props_ for the page/component in either case.

_redux-example_
```javascript
static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducer, null, isServer)
    store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })
    return { initialState: store.getState(), isServer }
  }
```

_API-example_
```javascript
static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }
```
