import { useNavigate } from "react-router-dom"





const BackButton = () => {
    const navigate = useNavigate();
  return (
    <button className="backbtn" onClick={() => navigate("/")} >Back test</button>
  )
}

export default BackButton