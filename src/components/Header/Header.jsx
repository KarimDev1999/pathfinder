import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
const Header = ({ dfs, bfs, reset }) => {
    const location = useLocation()
    return (
        <div className='header'>
            <nav>
                <ul>
                    <li >
                        <Link style={{ textDecoration: 'none', color: '#fff' }} to='/wave'>
                            wave-spreading
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none', color: '#fff' }} to='/pathfinder'>
                            pathfinder
                        </Link>
                    </li>
                </ul>

                {
                    location.pathname.includes('pathfinder') &&
                    <ul>
                        <li>
                            <button className='button' onClick={dfs}>
                                depth-first-search
                            </button>
                            <button className='button' onClick={bfs}>
                                breadth-first-search
                            </button>
                            <button className='button' onClick={reset}>
                                reset
                            </button>
                        </li>
                    </ul>
                }
            </nav>
        </div >
    )
}

export default Header
