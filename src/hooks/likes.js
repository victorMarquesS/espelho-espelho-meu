import { useState } from 'react';

export function useLikes(likesIniciais) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likesIniciais);

  function toggleLike() {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  }

  return { isLiked, likesCount, toggleLike };
}