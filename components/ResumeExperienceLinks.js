import React from 'react';
import styles from './ResumeExperienceLinks.module.css'; // Import CSS module

const ResumeExperienceLinks = ({
  companyWebsite,
  referenceName,
  referencePosition,
  referencePhone,
  projectSummary,
  externalLinkText,
	column
}) => {
  return (
    <div className={column ? styles.iconColumn : styles.iconRow}>
      {companyWebsite && (
        <a
          href={companyWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconContainer}
          data-tooltip={externalLinkText ? `${externalLinkText}` : "Visit: company website"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
						className={`${styles.nonproject} ${styles.icon}`}
          >
            <path d="M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z"/>
            <polygon points="20 2 20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2"/>
          </svg>
        </a>
      )}

      {referencePhone && (
        <a
          href={`tel:${referencePhone}`}
          className={styles.iconContainer}
          data-tooltip={`Reference: ${referenceName} [${referencePosition}] ${referencePhone}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
						className={`${styles.nonproject} ${styles.icon}`}
          >
            <path d="M12,15H6.11A9,9,0,0,1,10,8.86l1.79-1.2L10.69,6,8.9,7.2A11,11,0,0,0,4,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,12,15Z"/>
            <path d="M26,15H20.11A9,9,0,0,1,24,8.86l1.79-1.2L24.7,6,22.9,7.2A11,11,0,0,0,18,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,26,15Z"/>
          </svg>
        </a>
      )}

      {projectSummary && (
        <a
          href={projectSummary}
          className={styles.iconContainer}
          data-tooltip="Read more: project summary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
						className={`${styles.project} ${styles.icon}`}
          >
            <path d="M26,2H8A2,2,0,0,0,6,4V8H4v2H6v5H4v2H6v5H4v2H6v4a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V4A2,2,0,0,0,26,2Zm0,26H8V24h2V22H8V17h2V15H8V10h2V8H8V4H26Z" transform="translate(0 0)"/>
            <rect x="14" y="8" width="8" height="2"/>
            <rect x="14" y="15" width="8" height="2"/>
            <rect x="14" y="22" width="8" height="2"/>
          </svg>
        </a>
      )}
    </div>
  );
};

export default ResumeExperienceLinks;

