import React from 'react'
import Link from 'next/link'
import classes from './Headers.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Logo</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse all events</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
