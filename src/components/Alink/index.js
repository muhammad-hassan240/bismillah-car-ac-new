import { NavLink } from 'react-router-dom';

const ALink = ({ title = '', className = '', to = '', ...props }) => {
    return (
        <NavLink to={to} className={`${className}`}
            style={{ textDecoration: 'none' }}
        >
            {title}
            {props.children}
        </NavLink>
    );
};

export default ALink;

