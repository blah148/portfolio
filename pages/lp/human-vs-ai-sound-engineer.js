import SEO from "../../components/SEO";
import Footer from "../../components/Footer";
import Hypeddit from '../../components/Hypeddit.js';
import Head from "next/head";
import Image from "next/image";
import SpotifyEmbed from "../../components/SpotifyEmbed";
import YouTubeSubscribe from "../../components/YoutubeSubscribe.jsx";
import AudioPlayer from "../../components/AudioPlayer";
import GTM from "../../components/GTM.js";
import ArtistWidget from "../../components/ArtistWidget.js";
import "../../styles/blog.css";

export const metadata = {
  title: "Human vs AI Sound Engineer",
  description:
    "Musician compares $5,358.30 human vs. $200 A.I. mix - the results are surprising.",
};

export default function Page() {
		return (
			<>
	<SEO
		title="Human vs AI Sound Engineer - These Are The Results"
		description="Comparing a $5,358 human-made mix vs. an $200 A.I.-made mix - listen to the difference."
		image="https://f005.backblazeb2.com/file/blah148/albums/the-bell-it-shines-like-gold_pt-1.jpg"
		slug="/lp/mix-comparison"
		noTitleTag={true}
		nofollow={false}
	/>
				{/* GTM loads only on pages that render this component */}
				<GTM />

				<div className="blog-page-background">
					<main className="blog-wrapper">

						{/* TITLE */}
	{/* MOBILE HERO IMAGE (shows only under 768px) */}
	<div className="hero-mobile">
		<Image
			src="https://f005.backblazeb2.com/file/blah148/photos/top_image(2).jpeg"
			alt="top image"
			width={1520}
			height={855}
			quality={75}
			className="hero-image"
		/>
	</div>

	{/* DESKTOP HERO IMAGE (shows only at 768px and above) */}
	<div className="hero-desktop">
		<Image
			src="https://f005.backblazeb2.com/file/blah148/photos/top_image(2).jpeg"
			alt="top image"
			width={1520}
			height={855}
			quality={75}
			className="hero-image"
		/>
	</div>

	<h1>
		$5,358 Spent on a Human Mix vs. $200 Spent on an A.I. Mix – These Are the Results
	</h1>

						<YouTubeSubscribe />
						<p className="published-date">Published date: 15 November 2025</p>
						<hr />
						{/* ------------------------------- */}
						{/* BLOG CONTENT — TEXT UNCHANGED   */}
						{/* ------------------------------- */}

						<div id="intro"></div>
						<h2>3 weeks into working with the human sound engineer</h2>
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
	<h3>A possible pronenness to diva-like machinations</h3>
	<p>
		Plus, to be frank, in somewhat of a vain way, it felt gratifying to
		have someone&nbsp;‘on the payroll’, working for <i>me</i>, on my own project; or,
		and perhaps with less vanity, it felt less lonely to be able to call
		someone up (aka the sound engineer), just to chat about musical ideas.
	</p>

	<blockquote className="note-to-self">
		(As a note to self, this can be an expensive way to seek validation,
		given hourly rates of sound engineers.)
	</blockquote>
	<h2>It was (almost) time to listen to hear the results</h2>
						<p>
							In that state of mind, once I got home, the emailed invoice got paid. 
							Nestled into a listening position, my ears perked so that I was ready
							to feel justified at having spent $4,333.58, up until that point, in
							the mixing and mastering of these tracks. Though, before explaining
							how this listening session proceeded, first I should carve out some
							caveats to any readers.
						</p>
	<blockquote>
						<h3 id="caveat1">Caveat #1: They were voice memo recordings</h3>

						<p>
							The 12 tracks were initially recorded on a cell phone, using the voice
							recording feature. Is this a travesty? That may be fair to say. After
							all, a single-stem per recording, produced with the $0.50 mic within a
							cell phone, doesn't give a sound engineer a whole lot to work with.
						</p>

						<h3 id="caveat2">Caveat #2: I wasn't clear to myself about the scope of the work</h3>

						<p>
							In initially approaching this sound engineer, the primary request was
							to make the recordings mono. Beyond that, I didn't really know what I
							wanted, which is not good when paying steep hourly rates.
						</p>
	</blockquote>
	<br/>

	<h2>3 audio examples of the human-mixes</h2>
						<div id="review"></div>

						<p>
							So, again, seated in front of those monitors, it was time to review the
							recordings. The tracks, embedded below, represent an 3 of the 12 exact
							files which I began to playback, one-by-one.
						</p>
	<AudioPlayer
		src="https://bmvuqgfxczoytjwjpvcn.supabase.co/storage/v1/object/public/misc/2025.02.08%20-%20pallet%20on%20the%20floor%20-%20human.mp3"
		title="1. Pallet on the Floor"
		subtitle="February 8th, 2025"
	/>

	<AudioPlayer
		src="https://bmvuqgfxczoytjwjpvcn.supabase.co/storage/v1/object/public/misc/2025.01.13%20-%20lonesome%20road%20blues%20-%20human.mp3"
		title="2. Lonesome Road Blues"
		subtitle="January 13th, 2025"
	/>

	<AudioPlayer
		src="https://bmvuqgfxczoytjwjpvcn.supabase.co/storage/v1/object/public/misc/2024.12.05%20-%20st.%20louis%20blues%20-%20human.mp3"
		title="3. St. Louis Blues"
		subtitle="December 5th, 2024"
	/>
						<h3 id="pro1">a) Through speaker monitors, I liked the equalization</h3>

						<p>
	In comparison to the raw voice recordings, the vocals and the guitar parts sound much clearer. Up until this point, I had listened & relistened so many times to these recordings, and it was astonishing that, with this eq'ing, there were noted that I had never heard before in these newer mixes, due to the clarity.
						</p>

						<h3 id="pro2">b) The illusion of a stereo image is decent</h3>

						<p>
	To convey a sense of a stereo image, the sound engineer duplicated each track, and split it into 3 stems; a left-panned guitar part; a centre-panned vocals part; and a right-panned guitar part. Each stem was phase-shifted by a few milliseconds relative to each other; in this way, it created that auditory illusion of presenting as separate audio sources. Unlike through headphones, which I explain more below, through speakers it actually seemed to enliven the sound greatly.
						</p>

						<h3 id="con1">c) Though, the noise reduction cannibilizes the signal</h3>

						<p>
	The sound engineer insisted that loudness was needed, given the quiet nature of the voice recordings. He went on to explain that, to achieve loudness, (i) firstly, the noise would have to be filtered out (otherwise it would get boosted also); and (ii) secondly, a preset to 'level-up' the recordings to the proper loudness, measured in LUFS, as around -14 LUFS could be applied. The noise reduction step, however, seemed to reduce the quality of the signal, which is normal, but at face-value I didn't like it. To me, it affect the musicality, in that the vocals sometimes even cut out of the mix momentarily, or there would be strange crescendos, neither of which had actually occurred. Nonetheless, I relented, and was appreciative to get introduced to the concept of loudness and LUFS. In my mind, I figured that, to solve this, we could comb through each recording, manually, and touch-up any severe moments where the noise reduction was a bit overzealous. 
						</p>

						<h2 id="headphones">But then I listened to those on headphones... (aka 'the deal-breaker')</h2>

						<p>
	In listening-back on headphones, the stereo image, created with the 3 duplicated stems, was just sounded a bit too artificial to my ears, perhaps in that the parts sounded overly separated. As a neutral 3rd-party, I can imagine how this wouldn't pose an issue, but knowing the recording style, of Lomax-like field recordings, which I was drawn towards, this was much too foreign; to be fair, the sound engineer wouldn't have really known about this, and I really didn't realize it until testing the recordings out. Compounded by the irregular cresendos and decrescendos from the noise reduction and levelling, I knew that sadly none of this would work. That's tough, when standing in that pit of a sunk cost, but as an inexperienced recording artist who presented himself with those 2 caveats mentioned above I can see how I was a difficult client in many ways, and am sorry for that.
						</p>

						<div id="cutting"></div>
	<h3>End of part 1, as the human sound engineer was 'out of the mix'</h3>
						<p>
	As a long story put short, the collaboration was put on hiatus, and the outstanding balance was paid, which left the tally at $5,358.30 in mixing and mastering spend. Having cut those losses, I was prepared to just self-publish the overly quiet raw recordings, but it then occurred to me to try something else. 
						</p>
	<h2>Starting from scratch again, and finding out about "AI" / machine learning tools</h2>
						<p>
							The (albeit expensive) lesson I learned was that I really just needed 2
							checkboxes filled:
						</p>

						<ol>
							<li> The filling out of the stereo-image, and,</li>
							<li> The proper perceived loudness, of about -14 LUFS.</li>
						</ol>

						<h3>Firstly, exporting the raw files as 'widened' mono tracks</h3>

						<p>
	This part was straight-forward enough; using some free online tools, the recordings were hard-panned left and hard-panned right, while retaining the otherwise straight-forward mono characteristics.
	</p>

						<h3>Secondly, boosting the perceived loudness with "AI" / machine learning tools</h3>

						<p>
	Here is where the story abruptly ends. Upon searching for a tool to boost the LUFS of uploaded recordings, I came across a purportedly AI-based mastering tool (one of the commonly known ones), whose trial version I used to test the boosting of the LUFS. In feeding the rendered recording into a separate online tool to measure the LUFS, lo and behold it came out with the optimal amount of around -14 LUFS. Not only that, but it boosted the levels while maintaining the natural characteristics of the raw recording.
	</p>
	<h3>Satisfied with the AI-involved mixing toolchain</h3>
	<p>
	That was honestly how this album then got released. Moments after the trial version showed promise, I paid the $200.00 year-long fee, processed the 12 tracks that I had, and deployed them through Distrokid.</p>

	<h2>12 audio examples of the A.I. mixes</h2>
	<p>
		The playback from the published album, embedded below, comes from this exact
		process.
		To compare with the human-made mixes, the comparable tracks are,
	</p>

	<ul>
		<li>#4 (for St. Louis Blues)</li>
		<li>#6 (for Lonesome Road Blues)</li>
		<li>#8 (for the same version of Pallet on the Floor).</li>
	</ul>

	{/* SPOTIFY EMBED — hydration-safe */}
	<SpotifyEmbed src="https://open.spotify.com/embed/album/7d8NpGwxV9OS0evVmLU2VE?utm_source=generator" />


	<p>
	While I wish these recordings were made with something other than a phone, at least, thankfully, most people don't necessarily ask how the sausage gets made.
	</p>

						<div id="numbers"></div>

						<h3>As a crude summary, here's how those toolchains compared</h3>

	<table
		className="compare-table"
		style={{ borderCollapse: "collapse", width: "100%" }}
	>
		<thead>
			<tr>
				<th style={{ borderBottom: "1px solid #ccc", padding: "6px", textAlign: "left" }}></th>
				<th style={{ borderBottom: "1px solid #ccc", borderLeft: "1px solid #ccc", padding: "6px", textAlign: "left" }}>
					Cost (USD)
				</th>
				<th style={{ borderBottom: "1px solid #ccc", borderLeft: "1px solid #ccc", padding: "6px", textAlign: "left" }}>
					Wait time
				</th>
			</tr>
		</thead>

		<tbody>
			<tr>
				<td style={{ borderBottom: "1px solid #ccc", padding: "6px", textAlign: "left" }}>Human</td>
				<td style={{ borderBottom: "1px solid #ccc", borderLeft: "1px solid #ccc", padding: "6px" }}>
					$5,358.30
				</td>
				<td style={{ borderBottom: "1px solid #ccc", borderLeft: "1px solid #ccc", padding: "6px" }}>
					864&nbsp;hours
				</td>
			</tr>

			<tr>
				<td style={{ borderBottom: "1px solid #ccc", padding: "6px", textAlign: "left" }}>A.I.</td>
				<td style={{ borderBottom: "1px solid #ccc", borderLeft: "1px solid #ccc", padding: "6px" }}>
					$200.00
				</td>
				<td style={{ borderBottom: "1px solid #ccc", borderLeft: "1px solid #ccc", padding: "6px" }}>
					2&nbsp;hours
				</td>
			</tr>

			<tr>
				<td style={{ padding: "6px", textAlign: "left" }}></td>
				<td style={{ padding: "6px", borderLeft: "1px solid #ccc" }}>
					The human was about <strong>27x</strong> more expensive.
				</td>
				<td style={{ padding: "6px", borderLeft: "1px solid #ccc" }}>
					The human took about <strong>432x</strong> longer.
				</td>
			</tr>
		</tbody>
	</table>



	<br/>

	<p>
	Are there caveats to those numbers? Without any doubt. If I had known, and stuck with, what to ask for from a human sound engineer, that cost could have been the equivalent of 1-hour's consulting work, or even zero. If I had 12 different audio stems that needed to be balanced together, I don't see how the A.I. tool could have even begun to take that on. If more intricate digital effects, or editing, were needed, in post-production, once again I think a human couldn't be replaced for that.
	</p>

	<p>In summary, from what I can tell, the A.I. / machine learning tool was used here in the same manner that it might be used to recognize a face in a photo, or trace the outline of a person in a picture; it just traced out the waveform pretty darn well and (if that's the case) then was able to apply the necessary loudness to it. That's in essence all it did that was more efficient than a person, and it just so happens that for this project nothing else was really needed.</p>

					<h2 id="appendixA">Appendix A: an improved recording rig (no more cell phone)</h2>

	<p>
	Not that a high bar was initially set, now the recording rig is looking better. In sequence, it consists of,<br /><br />
	(i) A vintage 6-string and 12-string guitar, and voice, into,<br />
	(ii) Multiple Shure mics, into,<br />
	(iii) A tube preamp, to boost loudness and attain some tube tone, into,<br />
	(iv) An analog Tascam tape recorder, for some analog saturation, into,<br />
	(v) a Behringer audio interface, as an analog to digital converter, into,<br />
	(vi) Audacity (on the computer), to see the digital waveform, into,<br />
	(vii) the same AI tool, essentially just as a loudness tool like before.
	</p>

					<h2 id="appendixB">Appendix B: the next project</h2>

					<p>

	For a second album, I'm planning to put together a handful of traditional spiritual tracks (using the setup described above), and this is one example demo below.
					</p>
		<AudioPlayer
			src="https://bmvuqgfxczoytjwjpvcn.supabase.co/storage/v1/object/public/misc/2025.11.09_precious-lord_pannedLeftRight.mp3"
			title="Demo: Take My Hand, Precious Lord"
			subtitle="November 9th, 2025"
		/>
					<h2 id="appendixB">Appendix C: In the meantime, this is how a phone plus a fly-by-night A.I. tool can sound</h2>
	<p>
	This album is <i>probably</i> the first traditional blues album, which has been recorded with a cell phone and an A.I. loudness booster, as parts of the toolchain. It was recorded during the timespan of September 8th, 2024 to June 13th, 2025, in Alberta, Canada.
	</p>
	<div className="quoteSection">

		<blockquote className="artistQuote">
			<p><i>“That was beautiful… the best version of St. Louis Blues I’ve ever heard. I was telling my friends about you.”</i></p>
			<footer>— Jerron Paxton, August 2025 (Centrum Blues Festival)</footer>
		</blockquote>

		<blockquote className="artistQuote">
			<p><i>“You can really play, man.”</i></p>
			<footer>— Jontavious Willis, March 2020 (personal call)</footer>
		</blockquote>

		<blockquote className="artistQuote">
			<p><i>“He’s got it right.”</i></p>
			<footer>— Jimmy “Duck” Holmes, April 2016 (on a rendition of Skip James' "Devil Got My Woman")</footer>
		</blockquote>

	</div>
<br/>

	<Hypeddit />
	<br/>
<p className="mobile-left-desktop-center">
  Maybe this can be the start of the "Alberta Blues"? Bleep bloop.
</p>


	<Footer />

					</main>
				</div>
			</>
		);
}


