import'./component_css/Component.css'
import MyprofilePic from '../picture/circle.jpg'
function Profilepic() {
    return (
      
          <div className="mypicprofile">
            <img src={MyprofilePic} alt="gambar tidak tersedia" className="gambarku"/>
           
      </div>
   
    );
  }
  export default Profilepic;