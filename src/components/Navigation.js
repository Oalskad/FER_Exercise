import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div>
      <nav className='nav' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
          <ul className='nav-list'>
              <li className='nav-list--element'><a  className='active' href='#home'style={{color: theme.color,outline: 'none'
}} data-testid="toggle-theme-btn">Home</a></li>
              <li className='nav-list--element'><a href='#news'style={{backgroundColor: theme.backgroundColor,color: theme.color,outline: 'none'
}} data-testid="toggle-theme-btn">News</a></li>
              <li className='nav-list--element'><a href='#about'style={{backgroundColor: theme.backgroundColor,color: theme.color,outline: 'none'
}} data-testid="toggle-theme-btn">About</a></li>
              <li className='nav-list--element'><a href='#contact'style={{backgroundColor: theme.backgroundColor,color: theme.color,outline: 'none'
}} data-testid="toggle-theme-btn">Contact</a></li>
</ul>

          <div style={{position: 'relative'}}>
          <a className='switch-mode' href='#' onClick={toggle}
          style={{backgroundColor: theme.backgroundColor,color: theme.color,outline: 'none'
}} data-testid="toggle-theme-btn">
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div>
      </nav>
    </div>
  )
}
