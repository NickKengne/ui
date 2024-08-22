import React from 'react';

export default function CardVideo({videoRef}: {videoRef: React.RefObject<HTMLDivElement>}) {
  return (
    <div className='`w-[100%] h-[65%] rounded-2xl transition-al' ref={videoRef}>
        <video className='w-[100%] h-[100%] rounded-xl' autoPlay muted loop>
            <source src="https://cdn-site-assets.veed.io/03_Collaboration_9d7d592e48/03_Collaboration_9d7d592e48.mp4" type="video/mp4"/>
        </video>
    </div>
  )
}
