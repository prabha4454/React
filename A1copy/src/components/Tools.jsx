/* this component for displaying img of tools we use */
import "./style/tools.css"
export const Tools = (props) => {
    const {style ,img,alt } = props;
  return (
    <>
    <div className={style }>
        <img src={img} alt={alt}  />
    </div>
    </>
  )
}
