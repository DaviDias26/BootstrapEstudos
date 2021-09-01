import Logo from '../../assets/logo.png';
import LogoWhite from '../../assets/logo-white.png';
import './style.css'

const Header = ({whiteVersion, hideCard}) =>{

    const openDrawer = () =>{
        const event = new CustomEvent('openCart');
        window.dispatchEvent(event)
    }

    return(
        <div className="col-12">
            <header className="py-4  px-4 text-center">
                <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid"></img>
            </header>
            {!hideCard && (<button onClick = {()=>openDrawer()} className="btn btn-secondary cart-button">
                <span className="mdi mdi-cart"></span>
                2 ítens
            </button>)}
        </div>
    )
    
}

export default Header;