import'./component_css/Component.css'
import ProfilePic from './ProfilePic'
import Menu from './Menu';
import Nameprofile from './NamaProfile';
function LeftNav() {
    return (
      <div className="kode_levnav">
   <ProfilePic/>
   <Nameprofile/>
   <Menu/>
  
      </div>
        
        
    );
  }
  export default LeftNav;