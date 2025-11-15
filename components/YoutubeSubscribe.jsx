"use client";

import { useEffect, useRef } from "react";

export default function YouTubeSubscribe() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Inject script once
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;

    // Append script ONLY if not already added
    if (!document.querySelector('script[src="https://apis.google.com/js/platform.js"]')) {
      document.body.appendChild(script);
    }

    // Render widget
    if (window.gapi && window.gapi.ytsubscribe) {
      window.gapi.ytsubscribe.go(containerRef.current);
    } else {
      script.onload = () => {
        if (window.gapi?.ytsubscribe) {
          window.gapi.ytsubscribe.go(containerRef.current);
        }
      };
    }
  }, []);

  return (
    <div ref={containerRef}>
      <div
        className="g-ytsubscribe"
        data-channel="blah148"
        data-layout="full"
        data-theme="dark"
        data-count="default"
      ></div>
    </div>
  );
}

