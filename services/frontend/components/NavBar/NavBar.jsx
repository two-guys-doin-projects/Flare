import './NavBar.css'
import logo from '../../src/assets/logo.png'

function NavBar() {
    return(
        <nav className='main--nav'>
            <img src={logo} />
            <h3>Flare</h3>
            <div className='main--nav--buttons'>
                <button>Zaloguj się</button>
                <button>Zarejestruj się</button>
            </div>
        </nav>
    )
}

export default NavBar