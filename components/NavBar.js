import Link from 'next/prefetch'

export default () => (
  <ul>
    <Item href="/about">about</Item>
    <Item href="/portfolio">portfolio</Item>

    <style jsx>{`
      ul {
        list-style-type: none;
      }
    `}</style>
  </ul>
)

const Item = ({ href, children }) => (
  <li>
    <Link href={href}>
      <a>{ children }</a>
    </Link>

    <style jsx>{`
      li {
        display: inline-block;
      }
      a {
        display: inline-block;
        padding: 10px;
        font-size: 11px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
      }
      a:hover {
        color: #fff;
      }
    `}</style>
  </li>
)
