import {Fragment} from 'react';
import {Outlet, Link} from 'react-router-dom';
import './navigation.black.styles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/ravo-black.svg';


const NavigationBlack = () => {
    return(
        <Fragment>
            <div className = 'navigation-black'>
                <Link className= 'logo-container-black' to='/'>
                    <CrwnLogo className='logo-black'/>
                </Link>
                
                <div className= 'nav-links-container-left-black' >
                    <Link className='nav-link-left-black' to='/shop'>
                        <p>Products</p>
                    </Link>
                    <Link className='nav-link-left-black' to='/shop'>
                        <p>Solutions</p>
                    </Link>
                    <Link className='nav-link-left-black' to='/shop'>
                        <p>Pricing</p>
                    </Link>
                    <Link className='nav-link-left-black' to='/shop'>
                        <p>Support</p>
                    </Link>
                </div>
                <div className= 'nav-links-container-right-black' >
                    <Link className='nav-link-right-underline-black' to='/shop'>
                        <p>Log In</p>
                    </Link>
                    <Link className='nav-link-right-button-black' to='/shop'>
                        <p>Demo</p>
                    </Link>
                    <Link className='nav-link-right-button-black' to='/shop'>
                        <p>Sign Up</p>
                    </Link>
                </div>

            </div>
            <Outlet />
        </Fragment>
        
    )
}

export default NavigationBlack;