import "./parallax.scss"

const parallax = ({type}) => {
  return (
    <div className="parallax">
        <h1>{type === "services"?"What I Do?": "What I Did"}</h1>
    </div>
  )
}

export default parallax
