import React, {useState} from 'react'

const Exemple5 = () => {
  const [countLikes, setCountLikes] = useState(0);
  const incremenetLikes = () => {
    setCountLikes((prev) => prev + 1);
  }
  return (
    <div>
      <h1>Compteur de likes</h1>
      <button onClick={incremenetLikes}>👍 {countLikes}</button>
    </div>
  )
}

export default Exemple5
