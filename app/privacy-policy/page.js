// app/privacy-policy/page.js
import styles from '../../styles/Bio.module.css';

export const metadata = {
  title: 'Privacy Policy - blah148',
  description: 'Privacy policy for users of blah148 site and services',
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles['bio-content']}>
      <h2>Privacy Policy</h2>
      <p>
        This page outlines the types of personal information collected and
        recorded and how it is used.
      </p>

      <h3>1. Information Collection</h3>
      <p>
        Information such as browser type, IP address, and referring site may be
        automatically collected for analytical and security purposes. When users
        sign up for updates or services, names and email addresses may be
        voluntarily submitted.
      </p>

      <h3>2. Use of Information</h3>
      <p>
        Collected information may be used to personalize content, improve the
        site experience, analyze site traffic, and communicate relevant updates.
      </p>

      <h3>3. Sharing of Information</h3>
      <p>
        Personal data is not sold or rented to third parties. In rare cases, data
        may be disclosed to comply with legal obligations or to protect the
        site's integrity.
      </p>

      <h3>4. Cookies and Tracking</h3>
      <p>
        Cookies may be used to store visitor preferences and session information
        to enhance user experience. Tracking technologies such as Facebook Pixel
        or Google Analytics may also be used for performance measurement.
      </p>

      <h3>5. External Links</h3>
      <p>
        Some pages may contain links to third-party websites. Responsibility for
        the privacy practices of those sites is not assumed. Users are encouraged
        to review the privacy policies of external websites.
      </p>

      <h3>6. Security</h3>
      <p>
        Reasonable precautions are taken to protect user information. However, no
        method of transmission over the internet is entirely secure.
      </p>

      <h3>7. Data Retention</h3>
      <p>
        Submitted data may be retained for communication or analytical purposes.
        Requests for deletion of personal information can be made using the
        contact form.
      </p>

      <h3>8. Consent</h3>
      <p>
        Use of this site constitutes agreement to this privacy policy. Periodic
        updates to this policy may occur, and continued use of the site
        constitutes acceptance of any changes.
      </p>

      <h3>9. Contact</h3>
      <p>
        Questions or requests regarding privacy may be directed to the site’s
        contact form.
      </p>
    </div>
  );
}

