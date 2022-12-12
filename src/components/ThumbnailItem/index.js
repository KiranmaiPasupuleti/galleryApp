// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickImage, isActive} = props
  const {thumbnailAltText, thumbnailUrl, id} = imageDetails

  const onClickImg = () => {
    onClickImage(id)
  }
  const activateBtn = isActive ? 'active-img' : 'inactive-img'

  return (
    <li className="each-img-item">
      <button type="button" className="image-button" onClick={onClickImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activateBtn}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
