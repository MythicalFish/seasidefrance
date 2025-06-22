import styles from './styles.module.css';
import Whatsapp from './Whatsapp';

type Props = {
  setIsOpen: (isOpen: boolean) => void;
};

const MobileNav: React.FC<Props> = ({ setIsOpen }) => {
  function handleClick() {
    setIsOpen(false);
  }
  return (
    <>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="/" onClick={handleClick}>
            <i className="codicon codicon-home"></i>
            Home
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/discover" onClick={handleClick}>
            <i className="codicon codicon-map"></i>
            Discover
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="/#availability" onClick={handleClick}>
            <i className="codicon codicon-calendar"></i>
            Availability
          </a>
        </li>
      </ul>
      <hr />
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="tel:+33766384644">
            <i className="codicon codicon-call-outgoing"></i>
            +33 766 384 644
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="https://wa.me/33766384644" target="_blank" rel="noopener noreferrer">
            <Whatsapp />
            WhatsApp
          </a>
        </li>
        <li>
          <a href="mailto:info@seasidefrance.com">info@seasidefrance.com</a>
        </li>
      </ul>
    </>
  );
};

export default MobileNav;
