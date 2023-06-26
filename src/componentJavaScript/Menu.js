import'./component_css/Component.css'
import Home from '../myicon/homeic.svg'
import Facebk from '../myicon/face.svg'
import Fileic from '../myicon/fileic.svg'
import Insta from '../myicon/insta.svg'
import Myic from '../myicon/myic.svg'
import Pesanicon from '../myicon/pesanic.svg'
import Routing from './Routing'
import { useNavigate } from 'react-router-dom'
function Menu() {
  const navigate = useNavigate();
    return (
      
          <div className="menu-icon">


       <div className="iconku">
  <li><img src={Home} alt className="icon" />
  </li><li><img src={Myic} alt className="icon" />
   
  </li>
  <li><img src={Fileic} alt className="icon" />
  </li>
  <li><img src={Pesanicon} alt className="icon" />
  </li>

</div>
<div className="Menu-name">
<h3 className="info">Home</h3>
<h3 className="info" onClick={() => navigate('/about')}>About</h3>
<h3 className="info">Resume</h3>
<h3 className="info">Contact</h3>
</div>

           
      </div>
   
    );
    }
  export default Menu;