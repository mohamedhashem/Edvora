import './header.styles.scss'
 import { Avatar } from '@mui/material';


const Header = ({user}) => {
    return (
        <div className="header">
            <div className='logo' >
                <h3>Edvora</h3>
            </div>
            <div className='options'>
                <h4 className='option'>{user.name} </h4>
                <Avatar alt="Cindy Baker" src={user.url} />

            </div>
        </div>
    );
}

export default Header;