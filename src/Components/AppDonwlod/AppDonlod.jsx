import { assets } from '../../assets/assets'
import './AppDonlod.css'

const AppDonlod = () => {
  return (
    <div className='download' id='download'>
      <p>for better experince download <br />tomato app</p>
      <div className="download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDonlod
