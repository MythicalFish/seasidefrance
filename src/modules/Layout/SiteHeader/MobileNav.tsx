import styles from './styles.module.css';

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

const MobileNav: React.FC<Props> = ({ setIsOpen }) => {
  function handleClick() {
    setIsOpen(false);
  }
  return (
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <a href="/" onClick={handleClick}>
          Home
        </a>
      </li>
      <li className={styles.menuItem}>
        <a href="/discover" onClick={handleClick}>
          Discover
        </a>
      </li>
      <li className={styles.menuItem}>
        <a href="/#availability" onClick={handleClick}>
          Availability
        </a>
      </li>
    </ul>
  );
};

export default MobileNav;
