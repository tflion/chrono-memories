import './index.css';

const Header = ({children}) =>{
    return (
        <div className="header">
            <p>{children}</p>
        </div>
    )
}

export default Header;