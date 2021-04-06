import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'

export default function StarRating() {
  return (
    <div>
      {[...Array(5)].map(star => (
        <AiFillStar />
      ))}
      {[...Array(0)].map(star => (
        <AiOutlineStar />
      ))}
    </div>
  )
}
