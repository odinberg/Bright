import React from "react";
import YoutubeEmbed from "./youtubeEmbed";

/* Open the Move Smart video */

export function MoveVideo() {
    return (
        <div className="video-container">
            <h1>How-to Move</h1>
            <YoutubeEmbed embedId="mKxIOyhlzS0" />
        </div>
        );
}