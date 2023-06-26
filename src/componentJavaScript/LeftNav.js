import'./component_css/Component.css'
import ProfilePic from './ProfilePic'
import Menu from './Menu';
import Nameprofile from './NamaProfile';
import Sosmedicon from './Sosmedicon';
function LeftNav() {
    return (
      <div className="kode_levnav">
   <ProfilePic/>
   <Nameprofile/>
   <Sosmedicon/> 
   <Menu/>
    
  
      </div>
        
        
    )
  }
  export default LeftNav;