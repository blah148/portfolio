import SEO from "../../../components/SEO";
import SpotifyEmbed from "../../../components/SpotifyEmbed";
import YouTubeSubscribe from "../../../components/YoutubeSubscribe.jsx";
import AudioPlayer from "../../../components/AudioPlayer";
import GTM from "../../../components/GTM.js";
import "./blog.css";

export const metadata = {
  title: "Human vs AI Sound Engineer",
  description:
    "Musician compares $5,358.30 human vs. $200 A.I. mix - the results are surprising.",
};

export default function Page() {
  return (
    <>
      <SEO
        title="Human vs AI Sound Engineer"
        description="Musician compares $5,358.30 human vs. $200 A.I. mix - the results are surprising."
        slug="human-vs-ai-sound-engineer"
        page_type="blog"
        noTitleTag={true}
      />
			<GTM />
      <div className="blog-page-background">
        <main className="blog-wrapper">

          {/* TITLE */}
          <h1>
            Musician compares $5,358.30 human vs. $200 A.I. mix - the results are
            surprising.
          </h1>
					<YouTubeSubscribe />
					<p className="published-date">Published date: 15 November 2025</p>
          <hr />
          {/* TABLE OF CONTENTS — placed underneath the title */}
          <details className="toc-dropdown">
            <summary>Table of Contents</summary>

            <div className="toc-inner">
              <a href="#intro">Introduction</a>
              <a href="#caveat1">Caveat #1</a>
              <a href="#caveat2">Caveat #2</a>
              <a href="#review">Reviewing the Sound Engineer’s Work</a>
              <a href="#pro1">Pro #1 – Equalization</a>
              <a href="#pro2">Pro #2 – Stereo Image</a>
              <a href="#con1">Con #1 – Noise Reduction</a>
              <a href="#headphones">The Headphone Test</a>
              <a href="#cutting">Cutting Losses – And Turning to AI</a>
              <a href="#numbers">For stark comparisons, these are the numbers</a>
              <a href="#appendixA">Appendix A</a>
              <a href="#appendixB">Appendix B</a>
              <a href="#appendixC">Appendix C</a>
            </div>
          </details>
          {/* ------------------------------- */}
          {/* BLOG CONTENT — TEXT UNCHANGED   */}
          {/* ------------------------------- */}

          <div id="intro"></div>

          <p>
            On the drive home, I was actually relieved to get pinged by the
            $2,852.10 invoice, from the sound engineer; it meant that the
            revisions which we had discussed the previous weekend were finally
            ready to review.
          </p>

          <p>
            The money, I thought, was just a necessary evil; these 12 tracks,
            which I had hired him to master, felt precious enough to me. An
            appeal of making recordings, for anyone I imagine, can be that they
            bear witness to the time period from which they arise; in this case,
            that meant,
          </p>

          <ul>
            <li>(i) snapshots of the arc of a lovely, though short-lived, relationship;</li>
            <li>(ii) the expressing of hunger for validation, that coarsed deep within the psyche;</li>
            <li>(iii) plus the twists and turns involved in being a fly-on-the-wall through the literal trials (and tribulations) of rural living.</li>
          </ul>

          <p>
            Plus, to be frank, in somewhat of a vain way, it felt gratifying to
            have someone 'on the payroll', working for me, on my own project; or,
            and perhaps with less vanity, it felt less lonely to be able to call
            up the sound engineer, with an aim of discussing artistic decisions.
            (As a note to self, this can be an expensive way to seek validation,
            given hourly rates of sound engineers.)
          </p>

          <p>
            In that state of mind, once I got home, the emailed invoice got paid.
            Nestled into a listening position, my ears perked so that I was ready
            to feel justified at having spent $4,333.58, up until that point, in
            the mixing and mastering of these tracks. Though, before explaining
            how this listening session proceeded, first I should carve out some
            caveats to any readers.
          </p>

          <h2 id="caveat1">Caveat #1</h2>

          <p>
            the 12 tracks were initially recorded on a cell phone, using the voice
            recording feature. Is this a travesty? That may be fair to say. After
            all, a single-stem per recording, produced with the $0.50 mic within a
            cell phone, doesn't give a sound engineer a whole lot to work with.
          </p>

          <h2 id="caveat2">Caveat #2</h2>

          <p>
            in initially approaching this sound engineer, the primary request was
            to make the recordings mono. Beyond that, I didn't really know what I
            wanted, which is not good when paying steep hourly rates.
          </p>

          <div id="review"></div>

          <p>
            So, again, seated in front of those monitors, it was time to review the
            recordings. The tracks, embedded below, represent an 3 of the 12 exact
            files which I began to playback, one-by-one.
          </p>
<AudioPlayer
  src="https://bmvuqgfxczoytjwjpvcn.supabase.co/storage/v1/object/public/misc/2025.02.08%20-%20pallet%20on%20the%20floor%20-%20human.mp3"
  title="Pallet on the Floor"
/>

<AudioPlayer
  src="https://bmvuqgfxczoytjwjpvcn.supabase.co/storage/v1/object/public/misc/2025.01.13%20-%20lonesome%20road%20blues%20-%20human.mp3"
  title="Lonesome Road Blues"
/>

<AudioPlayer
  src="https://bmvuqgfxczoytjwjpvcn.supabase.co/storage/v1/object/public/misc/2024.12.05%20-%20st.%20louis%20blues%20-%20human.mp3"
  title="St. Louis Blues"
/>
          <h3 id="pro1">Pro #1 - the Equalization:</h3>

          <p>
in comparison to the raw voice recordings, the vocals and the guitar parts sound much clearer. Up until this point, I had listened & relistened so many times to these recordings, and it was astonishing that, with this eq'ing, there were noted that I had never heard before in these newer mixes, due to the clarity.
          </p>

          <h3 id="pro2">Pro #2 - the Stereo Image:</h3>

          <p>
to convey a sense of a stereo image, the sound engineer duplicated each track, and split it into 3 stems; a left-panned guitar part; a centre-panned vocals part; and a right-panned guitar part. Each stem was phase-shifted by a few milliseconds relative to each other; in this way, it created that auditory illusion of presenting as separate audio sources. Unlike through headphones, which I explain more below, through speakers it actually seemed to enliven the sound greatly.
          </p>

          <h3 id="con1">Con #1 - the Noise Reduction:</h3>

          <p>
the sound engineer insisted that loudness was needed, given the quiet nature of the voice recordings. He went on to explain that, to achieve loudness, (i) firstly, the noise would have to be filtered out (otherwise it would get boosted also); and (ii) secondly, a preset to 'level-up' the recordings to the proper loudness, measured in LUFS, as around -14 LUFS could be applied. The noise reduction step, however, seemed to reduce the quality of the signal, which is normal, but at face-value I didn't like it. To me, it affect the musicality, in that the vocals sometimes even cut out of the mix momentarily, or there would be strange crescendos, neither of which had actually occurred. Nonetheless, I relented, and was appreciative to get introduced to the concept of loudness and LUFS. In my mind, I figured that, to solve this, we could comb through each recording, manually, and touch-up any severe moments where the noise reduction was a bit overzealous. 
          </p>

          <h3 id="headphones">Using headphones</h3>

          <p>
Then, I listened back to the recording on headphones, and quickly that the way the stereo image which was created, with the 3 duplicated stems, was a non-starter when using headphones. The parts sounded overly separated. As a neutral 3rd-party, I can imagine how this wouldn't pose an issue, but knowing the recording style, of Lomax-like field recordings, which I was drawn towards, this was much too foreign; to be fair, the sound engineer wouldn't have really known about this, and I really didn't realize it until testing the recordings out. Compounded by the irregular cresendos and decrescendos from the noise reduction and levelling, I knew that sadly none of this would work. That's tough, when standing in that pit of a sunk cost, but as an inexperienced recording artist who presented himself with those 2 caveats mentioned above I can see how I was a difficult client in many ways, and am sorry for that.
          </p>

          <div id="cutting"></div>

          <p>
As a long story put short, I cut the collaboration short, and paid out the outstanding balance, which left the tally at $5,358.30 in mixing and mastering spend. Having cut my losses, I was prepared to just self-publish the overly quiet raw recordings, but it then occurred to me to try something else. 
          </p>

          <p>
            The (albeit expensive) lesson I learned was that I really just needed 2
            checkboxes filled-out:
          </p>

          <ol>
            <li>(a) the filling out of the stereo-image, and,</li>
            <li>(b) the proper perceived loudness, of about -14 LUFS.</li>
          </ol>

          <h2>A. The Stereo Image</h2>

          <p>
This part was straight-forward enough; using some free online tools, the recordings were hard-panned left and hard-panned right, while retaining the otherwise straight-forward mono characteristics.
</p>

          <h2>B. The Perceived Loudness</h2>

          <p>
Here is where the story abruptly ends. Upon searching for a tool to boost the LUFS of uploaded recordings, I came across a purportedly AI-based mastering tool (one of the commonly known ones), whose trial version I used to test the boosting of the LUFS. In feeding the rendered recording into a separate online tool to measure the LUFS, lo and behold it came out with the optimal amount of around -14 LUFS. Not only that, but it boosted the levels while maintaining the natural characteristics of the raw recording.
</p>

<p>
That was honestly how I was able to release my first album. Moments after the trial version showed promise, I paid the $200.00 year-long fee, processed the 12 tracks that I had, and deployed them through Distrokid. The playback from the live tracks, embedded below, comes from this exact process. 
</p>

{/* SPOTIFY EMBED — hydration-safe */}
<SpotifyEmbed src="https://open.spotify.com/embed/album/7d8NpGwxV9OS0evVmLU2VE?utm_source=generator" />


<p>
Thankfully, most people don't necessarily ask how the sausage gets made.
</p>

          <div id="numbers"></div>

          <h2>For stark comparisons, these are the numbers</h2>

          <ul>
            <li>
              Cost: $5,358.30 for the human vs. $200.00 for the AI. The human sound
              engineer was about 27x more expensive for the project.
            </li>
            <li>
              Time: 864 hours of wait time for the human (864 hours) vs. 2 hours of
              wait time for the AI. The human sound engineer took about 432x longer
              for the project.
            </li>
          </ul>

          <p>
Are there caveats to those numbers? Without any doubt. If I had known, and stuck with, what to ask for from a human sound engineer, that cost could have been the equivalent of 1-hour's consulting work, or even zero. If I had 12 different audio stems that needed to be balanced together, I don't see how the A.I. tool could have even begun to take that on. If more intricate digital effects, or editing, were needed, in post-production, once again I think a human couldn't be replaced for that.
          </p>

<p>
Are there caveats to those numbers? Without any doubt. If I had known, and stuck with, what to ask for from a human sound engineer, that cost could have been the equivalent of 1-hour's consulting work, or even zero. If I had 12 different audio stems that needed to be balanced together, I don't see how the A.I. tool could have even begun to take that on. If more intricate digital effects, or editing, were needed, in post-production, once again I think a human couldn't be replaced for that.
</p>

          <h2 id="appendixA">Appendix A: the current recording rig,</h2>

<p>
  At this time, the recording rig that I'm using is looking better; though, a high bar wasn't really set, given that the debut album arose from a cell phone voice memos app. It consists now of:<br /><br />
  (i) A vintage 6-string and 12-string guitar, into,<br />
  (ii) Multiple Shure mics, into,<br />
  (iii) A tube preamp, to boost loudness and attain some tube tone, into,<br />
  (iv) An analog Tascam tape recorder, for some analog saturation, into,<br />
  (v) a DAW, into,<br />
  (vi) Audacity, to create the digital waveform, into,<br />
  (vii) the same AI tool, essentially just used as a loudness tool.
</p>

          <h2 id="appendixB">Appendix B: an invitation to connect,</h2>

          <p>
As exemplified by the recording of 'Take My Hand, Precious Lord', I am hoping to compile a set of recordings, which can then be presented to a label for a more official release. In case you might know of a label who may be interested, please feel free to reach out!
          </p>

          <h2 id="appendixC">Appendix C: about me,</h2>

          <p>
For music, on most platforms, I can be tracked down under the name of 'blah148'. As a separate project, for folk & blues technical studies, I post transcriptions on https://ploddings.com, which is a site that I have operated since 2018, containing transcriptions of artists such as Reverend Gary Davis, Etta Baker, John Fahey, Charley Patton, Andres Segovia, as well as others. Finally, on my Youtube channel, I have posted instructional videos on pre-war blues related styles since about 2011, and have posted performance streams since about 2024. For the confidence to begin singing, I am thankful to Jontavious Willis for the encouragement and motivation.
          </p>
        </main>
      </div>
    </>
  );
}

