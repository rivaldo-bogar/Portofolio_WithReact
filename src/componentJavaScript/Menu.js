import'./component_css/Component.css'
import Home from '../myicon/homeic.svg'
import Facebk from '../myicon/face.svg'
import Fileic from '../myicon/fileic.svg'
import Insta from '../myicon/insta.svg'
import Myic from '../myicon/myic.svg'

function Menu() {
    return (
      
          <div className="menu">


       <div>
  <li><img src={Home} alt className="icon" />
    <h3 className="info">Home</h3>
  </li><li>
  </li><li><img src={Myic} alt className="icon" />
    <h3 className="info">About</h3>
  </li>
  <li><img src={Fileic} alt className="icon" />
    <h3 className="info">Resume</h3>
  </li>
  <li><img src={Insta} alt className="icon" />
    <h3 className="info">Contact</h3>
  </li>
</div>

           
      </div>
   
    );
    }
  export default Menu;