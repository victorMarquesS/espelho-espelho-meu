import { useState } from 'react';

export function useComments(initialComments) {
  const [comments, setComments] = useState(initialComments || []);
  const [newComment, setNewComment] = useState("");

  function addComment(event) {
    event.preventDefault();

    if (newComment.trim() === "") return; 

    const commentObject = {
      id: Date.now(),
      user: "nami_navegante",
      text: newComment.trim()
    };

    setComments([...comments, commentObject]);
    setNewComment("");
  }

  return { comments, newComment, setNewComment, addComment };
}