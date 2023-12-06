import { useState, useEffect } from 'react';

const useBlobImage = (imageUrl: string) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(imageUrl);
        if (response.ok) {
          const url = URL.createObjectURL(await response.blob())
          setImageSrc(url);
        } else {
          console.error('Failed to fetch image');
        }
      } catch (error) {
        console.error('Error fetching image:', error)
      }
    };

    fetchImage();
  }), [imageUrl];

  return imageSrc;
}

export default useBlobImage;