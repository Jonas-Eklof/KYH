import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

function ImageCard({ image, onLike, onComment }) {
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  // Load "like"-status from local storage
  useEffect(() => {
    const liked = localStorage.getItem(`like_${image.id}`) === "true";
    setIsLiked(liked);
  }, [image.id]);

  // Load comments from local storage
  useEffect(() => {
    const savedComments =
      JSON.parse(localStorage.getItem(`comments_${image.id}`)) || [];
    setCommentsList(savedComments);
  }, [image.id]);

  const handleLike = () => {
    const newLikedStatus = !isLiked;
    setIsLiked(newLikedStatus);
    localStorage.setItem(`like_${image.id}`, newLikedStatus);
    onLike(image.id, newLikedStatus);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComments = [...commentsList, comment];
      setCommentsList(newComments);
      localStorage.setItem(`comments_${image.id}`, JSON.stringify(newComments));
      setComment("");
    }
  };

  const handleDeleteComment = (index) => {
    const newComments = commentsList.filter((_, i) => i !== index);
    setCommentsList(newComments);
    localStorage.setItem(`comments_${image.id}`, JSON.stringify(newComments));
  };

  const handleEditComment = (index, newComment) => {
    const newComments = [...commentsList];
    newComments[index] = newComment;
    setCommentsList(newComments);
    localStorage.setItem(`comments_${image.id}`, JSON.stringify(newComments));
  };

  return (
    <div className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <img
        src={image.src}
        alt={image.id}
        className="w-full h-120 object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-4">
        <button
          onClick={handleLike}
          className={` text-2xl transition-transform duration-300 ${
            isLiked ? "text-red-500 animate-bounce" : "text-white animate-none"
          }`}
        >
          <FaHeart />
        </button>
        <div className="mt-4">
          <form onSubmit={handleCommentSubmit} className="mb-4">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment"
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </form>
          <div className="space-y-2">
            {commentsList.map((comment, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-700 p-2 rounded"
              >
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => handleEditComment(index, e.target.value)}
                  className="bg-transparent text-white flex-1"
                />
                <button
                  onClick={() => handleDeleteComment(index)}
                  className="text-red-500 hover:text-red-400"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
