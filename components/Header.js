import Link from 'next/prefetch';
import NavBar from './NavBar';
import Logo from './Logo';

export default () => (
  <header>
    <div className="left">
      <Link href='/'>
        <a>
          <span className="logo">
            <Logo />
          </span>
          <span className="title">Play App</span>
        </a>
      </Link>
    </div>
    <div className="nav">
      <NavBar />
    </div>
    <style jsx>{`
      header {
        background: #ffa52a;
        display: flex;
        font-size: 14px;
      }
      .logo {
        margin: 4px 5px 2px 4px;
        display: inline-block;
      }
      .left {
        flex: 9;
      }
      .title {
        font-weight: bold;
        display: inline-block;
        font-size: 14px;
        text-decoration: none;
        padding: 8px 10px 8px 4px;
        color: #000;
        vertical-align: top;
      }
      .nav {
        display: inline-block;
        vertical-align: top;
      }
      @media (max-width: 750px) {
        .title {
          font-size: 16px;
          padding-bottom: 0;
        }
        .nav {
          display: block;
        }
      }
    `}</style>
  </header>
)
