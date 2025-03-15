import React, {useState, useEffect} from 'react';

export default function WelcomeGrid() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('/api/videos')
            .then((response) => response.json())
            .then((data) => {
                setVideos(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    function startPreview(video) {
        video.muted = true;
        video.currentTime = 1;
        video.playbackRate = 0.5;
        video.play();
    }

    function stopPreview(video) {
        video.currentTime = 0;
        video.playbackRate = 1;
        video.pause();
    }

    let previewTimeout = null;

    function videoOnEnter(video) {
        startPreview(video);
        previewTimeout = setTimeout(stopPreview, 2000);
    }

    function videoOnLeave(video) {
        clearTimeout(previewTimeout);
        previewTimeout = null;
        stopPreview(video);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8">
            {videos.map((video) => (
                <div className="card bg-base-100 p-6 player-wrapper">
                    <video
                        className="h-full w-full rounded-lg"
                        controls
                        poster={video.thumbnailUrl}
                        onMouseOver={event => videoOnEnter(event.target)}
                        onMouseOut={event => videoOnLeave(event.target)}
                    >
                        <source
                            src={video.videoUrl}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    <div className="container mx-auto p-6 grid grid-cols-1 gap-4">
                        <div className="flex flex-col bg-white border-2 p-4">
                            <h2 className="mb-2 font-bold text-xl">
                                {video.title}
                            </h2>
                            <div className="mb-2 flex flex-wrap">
                                <img className="w-10 h-10 rounded-full mr-4 mb-2"
                                     src="/images/avatar.jpg"
                                     alt="Avatar of Jonathan Reinink"
                                />
                                <h2 className="mb-2 font-bold">
                                    {video.author}
                                </h2>
                            </div>
                            <p className="text-md text-justify">
                                {video.views} views<br />
                            </p>
                            <p className="text-md text-justify text-sm">
                                Uploaded {video.uploadTime}
                            </p>
                        </div>
                    </div>
                </div>
            ))};
        </div>
    )
}
