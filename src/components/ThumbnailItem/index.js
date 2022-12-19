import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, getImages, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const updateClassNames = isActive ? ' ' : 'btn-hide'

  const filterImages = () => {
    getImages(id)
  }

  return (
    <li className="card-container">
      <button
        type="button"
        className={`button ${updateClassNames}`}
        onClick={filterImages}
      >
        <img
          src={thumbnailUrl}
          className="thumbnail-image"
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
