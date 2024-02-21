import { useNavigate } from "react-router-dom"
//knapp med funktion för att  komma tillbaka till startsidan.
const BackButton = () => {
    const navigate = useNavigate();
  return (
    <button className="backbtn" onClick={() => navigate("/")} >Back test</button>
  )
}

export default BackButton