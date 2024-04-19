import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from "next/image";
import styles from './about.module.css';

export default function About() {
  return (
    <div>
      <Header />
			<div className="titleRow">
				<div className="titleMain">I make online experiences better with custom-built tools.</div>
				<div className="titleSecondary">From modern JavaScript websites, to zero-cookie tracking systems, to automated email flows.</div>
			</div>
			<div className="imageRow">
				<Image src="https://media.licdn.com/dms/image/D5603AQHJAatJxfi9vg/profile-displayphoto-shrink_800_800/0/1713058885794?e=1718841600&v=beta&t=y50f1jaxZbnybIuJXDGMMKCyvigAkoHkeptZNhKT65M" alt="Profile Image" width={500} height={500} />
				<Image
					src="https://f005.backblazeb2.com/file/unique-files/background+(2052+x+500+px)(1).jpg"
					alt="Background Image"
					width={1800} // Set the width of the image
					height={500} // Set the height of the image
				/>	
			</div>
			<div className={styles.textBody}>
			</div>
      <Footer />
    </div>
  );
}

