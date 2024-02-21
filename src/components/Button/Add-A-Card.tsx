import { useNavigate } from 'react-router-dom'
import "./add-a-card.scss"


// Här tar vi oss till addCard-sidan.
const AddACard = () => {
    const navigate = useNavigate()
  return (
    <button className="add-a-card" onClick={() => navigate("addcard")} >ADD A NEW CARD</button>
  )
}

export default AddACard