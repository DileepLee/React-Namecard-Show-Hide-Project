// Write your code here
import {useState} from 'react'
import './index.css'

const ShowHide = () => {
  const [showFirstName, setShowFirstName] = useState(false)
  const [showLastName, setShowLastName] = useState(false)

  const toggleFirstName = () => setShowFirstName(!showFirstName)
  const toggleLastName = () => setShowLastName(!showLastName)

  return (
    <div className="show-hide-container">
      <h1 className="title">Show/Hide App</h1>
      <div className="button-container">
        <button
          type="submit"
          onClick={toggleFirstName}
          className="toggle-button"
        >
          Show/Hide Firstname
        </button>
        <button
          type="submit"
          onClick={toggleLastName}
          className="toggle-button"
        >
          Show/Hide Lastname
        </button>
      </div>
      <div className="names-container">
        {showFirstName && <p className="firstName">Dileep</p>}
        {showLastName && <p className="lastName">Mylapuri</p>}
      </div>
    </div>
  )
}

export default ShowHide
