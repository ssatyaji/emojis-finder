import styles from './Navbar.module.css';

import searhIcon from '../../assets/search-icon.svg';
import emojiIcon from '../../assets/emoji-icon.svg'

const Navbar = () => {
    return (
       <nav className={styles.nav}>
           <img style={{ marginRight: 8 }} className={styles.navIcon} src={emojiIcon} alt="emoji icon" />
           <img style={{ marginTop: 3 }} className={styles.navIcon} src={searhIcon} alt="search icon" />
           <span className={styles.navTitle}> er </span>
       </nav> 
    )
}

export default Navbar;