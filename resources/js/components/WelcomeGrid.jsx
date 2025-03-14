import React, { useState, useEffect } from 'react';

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
                    <video
                        className="h-full w-full rounded-lg"
                        controls
                        poster={video.thumbnailUrl}
                    >
                        <source
                            src={video.videoUrl}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    <article className="prose prose-sm">
                        <h3 className="text-white">{video.title}</h3>
                        <h4 className="text-white">{video.author}</h4>
                        <h5 className="text-white">{video.views} views</h5>
                        <h5 className="text-white">Uploaded {video.uploadTime}</h5>
                    </article>
                </div>
            ))};
        </div>
    )
}
