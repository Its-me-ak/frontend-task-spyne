import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl, captions }) => {
    const videoRef = useRef(null);
    const [currentCaption, setCurrentCaption] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (videoRef.current) {
                const currentTime = videoRef.current.getCurrentTime();
                const activeCaption = captions.find(
                    caption => currentTime >= caption.start && currentTime <= caption.end
                );
                setCurrentCaption(activeCaption ? activeCaption.text : '');
            }
        }, 500);

        return () => clearInterval(interval);
    }, [captions]);

    return (
        <div className="video-container">
            {videoUrl && (
                <div className='video-box'>
                    <ReactPlayer
                        ref={videoRef}
                        url={videoUrl}
                        controls
                        width="100%"
                        height="380px"
                    />
                    {
                        currentCaption && (
                            <div className='caption-box'

                            >
                                {currentCaption}
                            </div>
                        )
                    }
                </div>
            )}
        </div>
    )
}

export default VideoPlayer
