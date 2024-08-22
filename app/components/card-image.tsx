import Image from 'next/image'
import React from 'react'

export default function CardImage({className,image,imageRef}: {className?: string, image?: string, imageRef: React.RefObject<HTMLDivElement>}) {
  const imageUrl = image || ''; // Provide a default value for the image prop if it is undefined
  return (
    <div className={`w-[100%] h-[65%] rounded-2xl ${className} flex justify-center items-center`} ref={imageRef}>
        <Image src={imageUrl}  alt={'colab-image'} width={200} height={100}/>
    </div>
  )
}


//src="https://cdn-site-assets.veed.io/03_Collaboration_9d7d592e48/03_Collaboration_9d7d592e48.mp4"