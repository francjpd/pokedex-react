
import headerSvg from '../../assets/header/header.svg';
import './Header.css';
import './Header.sm.css';
import './Header.md.css';
import './Header.lg.css';
import './Header.xl.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className='pokedex-header'>
            <div className='pokedex-header__content'>
                <img src={headerSvg} alt='pokemon logo' />
                <div className='pokedex-header__menu'>
                    {location.pathname !== '/' &&
                        <button onClick={() => navigate('/')}> List</button>
                    }
                    <button onClick={() => navigate('/add')}> Add Pokemon</button>
                </div>
            </div>
        </div>
    )
}