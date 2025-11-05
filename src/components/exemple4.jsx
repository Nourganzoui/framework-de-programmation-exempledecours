import React, { useState } from "react";


const Exemple4 = () => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked((prev) => !prev);
  };
  return (
    <div>
      <h1>Donnez votre avis :</h1>
      <button 
        onClick={toggleLike}
        style={{fontSize : "24px", background : "none", border: "none"}}
      >
        {liked ? "❤️" : "🤍"}
      </button>
    </div>
  )
}

export default Exemple4
