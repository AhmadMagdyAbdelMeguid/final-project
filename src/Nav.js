import { Link } from 'react-router-dom';
import logo from './imgs/Logo.svg' ;


export default function Nav(){
    return (
        <nav>
            <>
                <img src={logo}></img>
            </>
            <>
                <ul className='link'>
                     <li><Link className='li' to='/'>Home</Link></li>
                     <li><Link className='li'>About</Link></li>
                     <li><Link className='li'>Menu</Link></li>
                     <li><Link className='li' to='/booking'>Reservation</Link></li>
                     <li><Link className='li'>Order Online</Link></li>
                     <li><Link className='li'>Login</Link></li>
                </ul>
            </>
        </nav>

    )
}