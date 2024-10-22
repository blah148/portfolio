import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© 2024 Mitch Park - Blah148. All Rights Reserved.</p>
        <div className={styles.footerLinks}>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

