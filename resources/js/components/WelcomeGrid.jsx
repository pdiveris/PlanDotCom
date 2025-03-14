import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'

export default function WelcomeGrid() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('/api/videos')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setVideos(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8">
            {videos.map((video) => (
                <div className="card bg-base-100 p-6 player-wrapper" >
                    <h1 className="text-white">{video.title}</h1>
                    <ReactPlayer
                        className='react-player'
                        url={video.videoUrl}
                        width='100%'
                        height='100%'
                    />
                </div>
            ))};
        </div>
    )
}
