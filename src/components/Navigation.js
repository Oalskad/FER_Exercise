import React, { Component } from 'react'
export default class Navigation extends Component{
    render(){
        return(
            <div className='nav'>
                <nav>
                    <ul className='nav-list'>
                        <li className='nav-list--element'><a className='active' href ="#home">Home</a></li>
                        <li className='nav-list--element'><a href ="#news">News</a></li>
                        <li className='nav-list--element'><a href ="#about">About</a></li>
                        <li className='nav-list--element'><a href ="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}