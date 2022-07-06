import './menu.css';
import { Link } from 'react-router-dom';
import { menuOptionsType } from '../../interfaces/menuoptions';
export function Menu({ menuOptions }: { menuOptions: menuOptionsType }) {
    return (
        <nav className="menu">
            <ul>
                {menuOptions.map((item) => (
                    <li key={item.label}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
