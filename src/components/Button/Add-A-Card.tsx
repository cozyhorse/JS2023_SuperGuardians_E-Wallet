import { useNavigate } from 'react-router-dom'
import "./add-a-card.scss"

type Props = {}

const AddACard = (props: Props) => {
    const navigate = useNavigate()
  return (
    <button className="add-a-card" onClick={() => navigate("addcard")} >ADD A NEW CARD</button>
  )
}

export default AddACard