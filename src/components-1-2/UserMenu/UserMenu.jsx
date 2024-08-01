import css from './UserMenu.module.css';

import { HiUser } from "react-icons/hi";

const UserMenu = ({children}) => { 
    return <>
        <p className={css.user}>
            <HiUser size={36}/>
            {children}
        </p>
    </>
}

export default UserMenu;