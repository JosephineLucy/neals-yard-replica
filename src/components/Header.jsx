import '../css/header.css'
import logo from '../logo.png'

const Header = () => {
    return (<section className="header-main">
        <section className='header-left'>
            {/* <div className='logo-and-brandName'>
            <div className='logo'>
                <img className='logo-img' src={logo} alt="logo" />
            </div>
            <div className='brandName'>
                <p className='brand-title'>NEAL'S YARD REMEDIES</p>
                <p className='brand-desc'>Natural & organic health & beauty</p>
            </div>
            </div> */}
            <img src={logo} alt="logo" />
        </section>
    </section> );
}
 
export default Header;