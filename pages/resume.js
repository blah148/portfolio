// pages/resume.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './resume.module.css';
import ResumeExperienceLinks from '../components/ResumeExperienceLinks';

export default function Resume() {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.podOne}>
          <h1>The overview</h1>
          <div className={styles.podOneColumnTwo}>
            <p>
              I've been helping serve businesses a bigger slice of their users' online attention since 2018. Today, I orient myself to the needle-movers of the teams I integrate with, increasing the efficiency of their marketing toolchains, so they're less reliant on 3rd-party apps, while leaving an imprint of quality that sticks in the minds of users.
            </p>
            <div className={styles.podOneColumnTwoContactRow}>
              <a title="Let's chat? I'm free from 10am to 4pm MST." href="tel:+14036699921" className={styles.contactInfoRow}>
                <svg id="icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <title>phone--filled</title>
                  <path
                    d="M20.33,21.48l2.24-2.24a2.19,2.19,0,0,1,2.34-.48l2.73,1.09a2.18,2.18,0,0,1,1.36,2v5A2.17,2.17,0,0,1,26.72,29C7.59,27.81,3.73,11.61,3,5.41A2.17,2.17,0,0,1,5.17,3H10a2.16,2.16,0,0,1,2,1.36l1.09,2.73a2.16,2.16,0,0,1-.47,2.34l-2.24,2.24S11.67,20.4,20.33,21.48Z"
                  />
                </svg>
                <label>+1 (403) 669-9921</label>
              </a>
              <a href="mailto:mpark148@gmail.com" className={styles.contactInfoRow}>
                <svg
                  id="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32">
                  <title>send--alt--filled</title>
                  <path
                    d="M27.71,4.29a1,1,0,0,0-1.05-.23l-22,8a1,1,0,0,0,0,1.87l8.59,3.43L19.59,11,21,12.41l-6.37,6.37,3.44,8.59A1,1,0,0,0,19,28h0a1,1,0,0,0,.92-.66l8-22A1,1,0,0,0,27.71,4.29Z"
                  />
                </svg>
                <label>mpark148@gmail.com</label>
              </a>
              <a href="https://www.google.com/maps?q=Calgary,Alberta,Canada" target="_blank" className={styles.contactInfoRow}>
                <svg
                  id="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32">
                  <path
                    d="M16,2A11.0134,11.0134,0,0,0,5,13a10.8885,10.8885,0,0,0,2.2163,6.6s.3.3945.3482.4517L16,30l8.439-9.9526c.0444-.0533.3447-.4478.3447-.4478l.0015-.0024A10.8846,10.8846,0,0,0,27,13,11.0134,11.0134,0,0,0,16,2Zm0,15a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,17Z"
                    style={{ fill: "currentcolor" }} // You can replace "currentcolor" with any specific color
                  />
                  <circle
                    id="_Inner-Path_"
                    data-name="&lt;Inner-Path&gt;"
                    cx="16"
                    cy="13"
                    r="4"
                    style={{ fill: "none" }} // As specified by .cls-1, but now inline
                  />
                </svg>
                <label>Calgary, AB, Canada</label>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.podTwo}>
          <div className={styles.podTwoColumnOne}>
            <h2>Skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>UI/UX Design</li>
              <li>Tracking & Analytics</li>
              <li>Web Design</li>
              <li>Email Marketing</li>
              <li>Meta Ads</li>
              <li>Google Ads</li>
            </ul>
            <div className={styles.podTwoColumnTwoEducationRow}>
              <h2>Tertiary Qualifications</h2>
              <div className={styles.experiencePod}>
                <div className={styles.experienceInfo}>
                  <div className={styles.title}>Certified Media Buying Professional Exam</div>
                  <div className={styles.organization}>Facebook Blueprint 321-101</div>
                  <div className={styles.timespan}>Aug 2019</div>
                </div>
                <ResumeExperienceLinks column={true} externalLinkText="View certification" companyWebsite="https://www.youracclaim.com/badges/ba836887-0ea9-4ae7-8252-80c57f82caa6/linked_in_profile" />
              </div>
              <div className="separator"></div>
              <div className={styles.experiencePod}>
                <div className={styles.experienceInfo}>
                  <div className={styles.title}>Core Competencies Exam</div>
                  <div className={styles.organization}>Facebook Blueprint 310-101</div>
                  <div className={styles.timespan}>Jul 2019</div>
                </div>
                <ResumeExperienceLinks column={true} externalLinkText="View certification" companyWebsite="https://www.youracclaim.com/badges/ba836887-0ea9-4ae7-8252-80c57f82caa6/linked_in_profile" />
              </div>
              <div className="separator"></div>
              <div className={styles.experiencePod}>
                <div className={styles.experienceInfo}>
                  <div className={styles.title}>BSc Mechanical Engineering</div>
                  <div className={styles.organization}>University of Calgary</div>
                  <div className={styles.timespan}>Apr 2017</div>
                </div>
                <ResumeExperienceLinks column={true} externalLinkText="View certification" companyWebsite="https://f005.backblazeb2.com/file/unique-files/mitchell-park_transcript.pdf" />
              </div>
            </div>
          </div>
          <div className={styles.podTwoColumnTwo}>
            <div className={styles.podTwoColumnTwoExperienceRow}>
              <h2>Work experience</h2>
              <div className={styles.experiencePodsContainer}>
                <div className={styles.experiencePod}>
                  <div className={styles.experienceInfo}>
                    <div className={styles.title}>Creator & fundraiser</div>
                    <div className={styles.organization}>Ploddings</div>
                    <div className={styles.timespan}>Dec 2018 - present</div>
                  </div>
                  <ResumeExperienceLinks column={true} companyWebsite="https://ploddings.com" referenceName="T. DeWayne Moore" referencePosition="Assistant Professor of History, Texas A&M University" referencePhone="1-615-663-7858" projectSummary="/projects/ploddings" />
                </div>
                <div className="separator"></div>
                <div className={styles.experiencePod}>
                  <div className={styles.experienceInfo}>
                    <div className={styles.title}>Digital Marketer</div>
                    <div className={styles.organization}>Spot Dog Walkers</div>
                    <div className={styles.timespan}>Sep 2021 - Oct 2022</div>
                  </div>
                  <ResumeExperienceLinks column={true} companyWebsite="https://www.spotdogwalkers.com/" referenceName="John Minchin" referencePosition="Co-Founder, Owner" referencePhone="1-403-889-5139" projectSummary="/projects/spotdogwalkers" />
                </div>
                <div className="separator"></div>
                <div className={styles.experiencePod}>
                  <div className={styles.experienceInfo}>
                    <div className={styles.title}>Account Manager</div>
                    <div className={styles.organization}>Linx Digital Agency</div>
                    <div className={styles.timespan}>Jul 2020 - Apr 2021</div>
                  </div>
                  <ResumeExperienceLinks column={true} companyWebsite="https://linxdigital.com/" referenceName="Alex Tretjakov" referencePosition="Co-Owner" referencePhone="1-403-710-1649" />
                </div>
                <div className="separator"></div>
                <div className={styles.experiencePod}>
                  <div className={styles.experienceInfo}>
                    <div className={styles.title}>Paid media specialist</div>
                    <div className={styles.organization}>Jetfuel Agency</div>
                    <div className={styles.timespan}>Oct 2019 to Jan 2020</div>
                  </div>
                  <ResumeExperienceLinks column={true} companyWebsite="https://jetfuel.agency/" referenceName="Edwin Choi" referencePosition="Owner" referencePhone="1-714-278-1930" />
                </div>
                <div className="separator"></div>
                <div className={styles.experiencePod}>
                  <div className={styles.experienceInfo}>
                    <div className={styles.title}>Paid media specialist</div>
                    <div className={styles.organization}>AlgaeCal</div>
                    <div className={styles.timespan}>Oct 2018 - Sep 2019</div>
                  </div>
                  <ResumeExperienceLinks column={true} companyWebsite="https://www.algaecal.com/" referenceName="Philip Jordan Wong" referencePosition="Director of Acquisition" referencePhone="1-403-819-3912" projectSummary="/projects/algaecal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );

}

