import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from "next/image";
import styles from './about.module.css';

export default function About() {
  return (
    <div>
      <Header />
      <div className="titleRow">
        <div className="titleMain">Stuck figuring things out by ear?</div>
        <div className="titleSecondary">Hit all the right notes by starting with the big stuff, then zooming into the small stuff.</div>
      </div>
      <div className="imageRow">
        <Image src="https://media.licdn.com/dms/image/D5603AQHJAatJxfi9vg/profile-displayphoto-shrink_800_800/0/1713058885794?e=1718841600&v=beta&t=y50f1jaxZbnybIuJXDGMMKCyvigAkoHkeptZNhKT65M" alt="Profile Image" width={500} height={500} />
        <Image
          src="https://f005.backblazeb2.com/file/unique-files/background+(2052+x+500+px)(1).jpg"
          alt="Background Image"
          width={2052} // Set the width of the image
          height={500} // Set the height of the image
        />  
      </div>
      <div className={styles.textBody}>
        <h2>How I solve problems</h2>
        <p>Whether it's making a new website, building an automated email response chain, writing a blog, or even learning a new song on guitar, the approach I have is a simple one; start with the broad strokes, then detail-in the medium strokes, then the fine strokes.. not so different from art class back in childhood! Starting off broad, it helps me define the proper project scope early-on, without getting stuck in the minutia. Then, as those broader strokes take shape, it sets-up rough outlines within which I can color-into, gently redefining those boundaries here & there, knowing that the bigger picture is taken care of.</p>
        <h3>Step 1: The broad strokes</h3>
        <p>At this stage, it's all about defining the big-picture; what's the goal of the task? What are the key deliverables? Where can't we go, given the aesthetic boundaries of the brand?  How much time & resources do we have to work with? Rather than worrying about things that can easily change, like the color gradient of a menu button, it's about triple-checking that a redesign of the site is exactly what your intention is, in order to achieve goals like enhancing the online experiences of your users.</p>
        <p>To convey the flavor of this step, more examples may include: deciding on the broad messaging for a 16-part email automation flow, in 1-sentence per-email, before going ahead and writing the full copy; defining the few all-important metrics that mean success for your business, prior to setting up a live analytics dashboard; determining if you want to commit long-term to brand-recognition ads, or if you want to precisely target warm leads for conversion on various social platforms. It helps me start from what you desire at the end, and work backwards from there, knowing I have your intentions of the project in tact.</p>
        <h3>Step 2: The medium strokes</h3>
        <p>After penciling-in those broad outlines, the medium strokes get into fleshing-out the body of the project, leaving tons of meat-on-the-bone to fine-tune later down the line. It's the step where "no idea is a bad idea", and getting the first-draft finished, warts & all, is what it's all about. In fact, writing an article might be the best example here; whereas jotting down the outline is more "step one" territory, actually building-out the bodies of words, that may protrude a little funny here and there, is "step two" territory - free of judgement & full of experimentation (while staying within those broad strokes).</p>
        <p>To give more examples, when stirring-up a new website, the medium strokes can entail setting-up the components of each page, with lots of placeholder text that could almost work as real text; when setting-up a social ad targeting campaign, one medium strokes task could involve importing the CRM data of users into the ads interface, facilitating the fine strokes task of later going live. In other words, this is the step where I am getting busy to get your project done, relying on the rolodex of experiences to employ creativity but obey efficiency, all while communicating with you as actively as possible.</p>
        <h3>Step 3: The fine strokes</h3>
        <p>This step is my favorite step of all; a lot like the horse seeing the stable, and dashing home. With lots of meat-on-the-bone from "step 2", which I can trust meets your project needs due to investment of "step 1", this final step involves the fun stuff - going live, carving out the smile on the proverbial sculpture, or rewriting an enthusiastic draft so it's looking nice & compact. Returning to the web design example, this is the step where the page structure looks solid, the SEO metadata is set, all the database/email APIs are testing properly, the copy is looking in ship-shape, leaving me with one of my favorite tasks of polishing out the CSS so that it looks clean and functional, not to mention that ultimate step of deploying the site live.</p>
        <p>And when the project is complete, and you're happy after a few revisions here & there, I will be there to help you monitor its success, sort of like a nurse giving a care-sheet of dos & don'ts after a medical procedure. I want to treat others how I want to be treated, and that means giving you all the tools to operate independently, whether it's informing you how to add new data to a custom-build website, the ins-and-outs of an email automation, or showing you the levers that I like to use for an online ad campaign. I believe that being a valuable worker in any field doesn't end with getting the paycheque, but instead is about building lasting relationships on the back of a job well done.</p>

        <h2>About me</h2>
        <p>Just about 20 years ago (back in 2006) I posted a video on Youtube. Distilling a love for Jimi Hendrix & the Rolling Stones into a 3-minute guitar jam, filmed with a grainy potato, it naturally drove one to consider things like audience creation & content planning. At the time, I hadn't the faintest clue these ideas would serve as my meal-ticket and the meal-ticket of many others years later; it was just a fun hobby.</p>
        <p>By 2011, I had a small-time "hit" on Youtube, creating tutorial-videos for primarily pre-WWII style acoustic blues guitar. It was a feedback loop that made me happy; I learned an obscure song, slowing the song down so I would get each note, would remember it long enough to film a 5 to 10-minute video, post it onto Youtube, and read supportive comments, encouraging a new video. Not only was I gaining the satisfaction of improving on the guitar, but I soon had 5,000, then 7,000, then 10,000 subscribers. Nowadays, when I hear things like "niching down" and "content planning" it takes me back to this period that served as a visceral & exciting experience.</p>
        <p>All through my university years, between 2013-2017, I continued in this regime, being a mechanical engineering student by day, and a blues guitar tutorial-maker by night. In 2017, I earned my degree, that included a fascinating internship at neuroArm at the Calgary Foothills Hospital. This was when the "shale oil boom" was in full-force, flooding the market with cheap oil, drying out the taps of the once formidable Albertan oilsands. Secretly, I was actually happy at the dampened job market for engineers, because I felt it granted me a free-pass to instead dive head-long into the digital content sphere that I had been "moonlighting" within during school.</p>
        <p>And since 2018, up to today in 2024, that is the path I have plodded upon. It has led me to all sorts of experiences, from leading the Meta Ads account for Perfect Snacks, to fighting until the last breath for small mom & pop shops testing a social campaign. It has taught me about a variety of business models, some of which share nothing except their customers being online, and has encouraged me to learn about aesthetics & design within the constraints of profitability. Perhaps your current project will be the next brick slathered in mortar upon which our paths can cross. </p>
      </div>
      <Footer />
    </div>
  );
}

