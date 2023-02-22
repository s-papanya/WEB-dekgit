import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import MainContact from "../../Components/Main-Contact/main-contact";

import "./contact.css"

function Contact() {
    const coverHome = require("../../Assets/cover_homePage/coverHome.jfif");
    return (
      <div className='container'>
        <img className="coverHome" src={coverHome} alt="cover" />
      <div className='h-e-a-d'>
        <Navbar/>
      </div>
      <div className='m-i-d-d-l-e'>
        <div className='main'>
          <MainContact/>
        </div>
      </div>
      <div className='f-o-o-t'>
        <Footer/>
      </div>
    </div>
    );
  }
  
  export default Contact ;