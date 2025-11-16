// components/AudioPlayer.js
"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import styles from "./AudioPlayer.module.css";

export default function AudioPlayer({ src, title, subtitle }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  /* Init / destroy WaveSurfer */
  useEffect(() => {
    if (!src || !waveformRef.current) return;

    wavesurfer.current?.destroy?.();

    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#E3963E",
      progressColor: "#E3963E",
      cursorColor: "#555",
      height: 100,
      responsive: true,
      normalize: true,
    });

    wavesurfer.current.load(src);

    return () => wavesurfer.current?.destroy();
  }, [src]);

  /* Play / pause handler */
  const togglePlay = () => {
    if (!wavesurfer.current) return;
    wavesurfer.current.playPause();
    setIsPlaying(wavesurfer.current.isPlaying());
  };

  return (
    <div className={styles.playerContainer}>
      {title && (
        <div className={styles.songTitle}>
          <h3><i>{title}</i></h3>
					<span>Recording date: {subtitle}</span>
        </div>
      )}

      <button onClick={togglePlay} className={styles.playButton}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      <div ref={waveformRef} className={styles.waveform} />
    </div>
  );
}

