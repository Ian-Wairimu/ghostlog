import style from "./NavLinks.module.css";

const NavLinks = ({linkLists}) => {
    return (
        <nav className={style.navLinks}>
            <ul className={style.linkItems}>
                <li className={style.linkList}>{linkLists}</li>
            </ul>
        </nav>
    );
}

export default NavLinks;