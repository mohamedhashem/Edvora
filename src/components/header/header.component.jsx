import './header.styles.scss'
import {ReactComponent as Profile} from '../../logo.svg'
import { Avatar } from '@mui/material';


const Header = ({name,imageUrl}) => {
    return (
        <div className="header">
            <div className='logo' >
                <h3>Edvora</h3>
            </div>
            <div className='options'>
                <h4 className='option'>Full Name </h4>
                <Avatar alt="Cindy Baker" src="" />

            </div>
        </div>
    );
}

export default Header;