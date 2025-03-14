import ReactPlayer from 'react-player'

export default function WelcomeGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8">
            <div className="card bg-base-100 p-6 player-wrapper" >
                <ReactPlayer
                    className='react-player'
                    url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                    width='100%'
                    height='100%'
                />
            </div>
            <div className="card bg-base-100 p-6 player-wrapper" >
                <ReactPlayer
                    className='react-player'
                    url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
                    width='100%'
                    height='100%'
                />
            </div>
            <div className="card bg-base-100 p-6 player-wrapper" >
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                    width='100%'
                    height='100%'
                />
            </div>
        </div>
    )
}
