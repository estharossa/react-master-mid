import { FaTwitter } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <FaTwitter className="app-logo" size="2em" />
            <div>
                <FaUserCircle className="app-logo" size="2em" />
            </div>
        </div>
    )
}

export default Header