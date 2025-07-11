import styles from './styles.module.css';
import clsx from 'clsx';
import Whatsapp from './Whatsapp';
import info from '@data/info';

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
        <li>
          <a href="/" onClick={handleClick}>
            <i className="codicon codicon-home"></i>
            Home
          </a>
        </li>
        <li>
          <a href="/discover" onClick={handleClick}>
            <i className="codicon codicon-map"></i>
            Discover
          </a>
        </li>
        <li>
          <a href="/#availability" onClick={handleClick}>
            <i className="codicon codicon-calendar"></i>
            Availability
          </a>
        </li>
      </ul>
      <hr />
      <ul className={clsx(styles.menu, styles.secondary)}>
        <li>
          <a href={`tel:${info.phone.replace(/\s/g, '')}`}>
            <i className="codicon codicon-call-outgoing"></i>
            {info.phone}
          </a>
        </li>
        <li>
          <a href={`tel:${info.phone2.replace(/\s/g, '')}`}>
            <i className="codicon codicon-call-outgoing"></i>
            {info.phone2}
          </a>
        </li>
        <li>
          <a href="https://wa.me/33766384644" target="_blank" rel="noopener noreferrer">
            <Whatsapp />
            WhatsApp
          </a>
        </li>
        <li>
          <a href={`mailto:${info.email}`}>
            <i className="codicon codicon-mail"></i>
            {info.email}
          </a>
        </li>
      </ul>
    </>
  );
};

export default MobileNav;
