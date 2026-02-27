// app/write/page.js
import styles from '../../styles/Bio.module.css';

export const metadata = {
  title: 'blahnok - Write',
  description: 'Contact information for Ploddings correspondence',
};

export default function WritePage() {
  return (
    <div className={styles['bio-content']}>
      <h2>Write</h2>

      <p>
        To write (and send) a message, the following email address can be used:
      </p>

      <p>
        <em>
          <span id="contact-email">
            info [at] ploddings [dot] com
          </span>
        </em>
      </p>
    </div>
  );
}