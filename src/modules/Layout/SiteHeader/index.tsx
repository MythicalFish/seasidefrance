import { useState } from 'react';
import Button from '@components/Button';
import Hamburger from './Hamburger';
import MobileNav from './MobileNav';
import styles from './styles.module.css';
import clsx from 'clsx';

type Props = {
  page?: string;
};

const SiteHeader: React.FC<Props> = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={clsx(styles.headerContainer, isOpen && styles.open)}>
      <div className={styles.header}>
        <div className="container">
          <div className="p-4 md:p-8 flex md:items-center flex-row gap-4 justify-between">
            <div>
              <a className="leading-none opacity-90 block" href="/">
                <span className="text-xl text-white opacity-90">
                  <span className="opacity-90">seaside</span>
                  <span className="font-semibold">france</span>
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              {page !== 'chateau-de-rochebonne' && (
                <Button variant="plain" href="/chateau-de-rochebonne">
                  Stay in Le Château
                </Button>
              )}
              <Button variant="plain" href="#contact" className="mr-2">
                Contact us
              </Button>
              {['discover', 'home'].includes(page ?? '') ? (
                <Button variant="primary" href="#availability">
                  See Availability
                </Button>
              ) : (
                <Button variant="primary" href="/#availability">
                  See Availability
                </Button>
              )}
            </div>
            <div className="md:hidden overflow-hidden">
              <Hamburger toggleMenu={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>
          <MobileNav setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
