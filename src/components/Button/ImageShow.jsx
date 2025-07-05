import env from "../../env"

function ImageShow(props){
  const imageSource = env.siteApiUrl+props.url
  return(<img src={imageSource} className="profileImage" />)
}
export default ImageShow