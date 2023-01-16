import '../css/header.css'
import logo from '../images/logo.png'
import userIcon from '../images/user.jpeg'
import search from '../images/search.jpeg'
import burger from '../images/burger-menu.jpeg'
import bag from '../images/bag.jpeg'

const Header = () => {
    return (
        <div className='page-width'>
            <section className='header-toolbar'>
                <p>United Kingdom (GBP £) </p>
                <p>Loyalty</p>
                <p>Accessibility</p>
                <p>Contact us</p>
                <p>Help</p>
            </section>
            <section className='header-main'>
                <section className='header-left'>
                    <img className='header-logo' src={logo} alt="logo" />
                </section>
                <section className='header-right'>
                    <img className='header-icon' src={userIcon} alt="userIcon" />
                    <img className='header-icon' src={search} alt="searchIcon" />
                    <img className='header-icon' src={burger} alt="burgerMenu" />
                    <img className='header-icon' src={bag} alt="shoppingBag" />
                </section>
            </section>
        </div> 
    );
}
 
export default Header;