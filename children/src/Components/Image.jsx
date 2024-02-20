import "./Image.css"

const Image = (props) => {
  const {src, alt} = props
  return (
    <img className="imagen" src={src} alt={alt}/>
  )
}

export default Image