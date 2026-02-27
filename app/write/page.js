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
        <span id="contact-email">
          info [at] ploddings [dot] com
        </span>
      </p>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var user = "info";
              var domain = "ploddings";
              var tld = "com";
              var email = user + "@" + domain + "." + tld;
              var container = document.getElementById("contact-email");
              if (container) {
                container.innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
              }
            })();
          `,
        }}
      />
    </div>
  );
}
