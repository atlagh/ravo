import {Fragment} from 'react';
import {Outlet, Link} from 'react-router-dom';
import './navigation.styles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/test3.svg';


const Navigation = () => {
    return(
        <Fragment>
            <div className = 'navigation'>
                <Link className= 'logo-container' to='/'>
                    <CrwnLogo className='logo'/>
                </Link>
                
                <div className= 'nav-links-container-left' >
                    <Link className='nav-link-left' to='/shop'>
                        <p>Products</p>
                    </Link>
                    <Link className='nav-link-left' to='/shop'>
                        <p>Solutions</p>
                    </Link>
                    <Link className='nav-link-left' to='/shop'>
                        <p>Pricing</p>
                    </Link>
                    <Link className='nav-link-left' to='/shop'>
                        <p>Support</p>
                    </Link>
                </div>
                <div className= 'nav-links-container-right' >
                    <Link className='nav-link-right-underline' to='/shop'>
                        <p>Log In</p>
                    </Link>
                    <Link className='nav-link-right-button' to='/shop'>
                        <p>Demo</p>
                    </Link>
                    <Link className='nav-link-right-button' to='/shop'>
                        <p>Sign Up</p>
                    </Link>
                </div>

            </div>
            <Outlet />
        </Fragment>
        
    )
}

export default Navigation;