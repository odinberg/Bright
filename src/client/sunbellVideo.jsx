import React from "react";
import YoutubeEmbed from "./youtubeEmbed";


/* Open the Sunbell video */

export function SunbellVideo() {
    return (
        <div className="video-container">
            <h1>How-to Sunbell</h1>
            <YoutubeEmbed embedId="QLfv61ShI9o" />
        </div>
        );
}