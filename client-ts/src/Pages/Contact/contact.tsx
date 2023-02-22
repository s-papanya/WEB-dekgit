import Footer from "../../Components/Footer/footer";
import MainContact from "../../Components/Main-Contact/main-contact";
import Navbar from "../../Components/Navbar/navbar";
<<<<<<< HEAD
=======
import MainContact from "../../Components/Main-Contact/main-contact";

>>>>>>> 32f345327b6779e5ba77e9ad203a6a7b2b664770
import "./contact.css"

function Contact() {
    const coverHome = require("../../Assets/cover_homePage/coverHome.jfif");
    return (
      <div className='container'>
        <img className="coverHome" src={coverHome} alt="cover" />
<<<<<<< HEAD
        <div className="home-m-i-d-d-l-e">
          <div className="home-main">
            <MainContact/>
          </div>
        </div>
        <div className="home-f-o-o-t">
          <Footer />
        </div>
        <Navbar />
=======
      <div className='h-e-a-d'>
        <Navbar/>
>>>>>>> 32f345327b6779e5ba77e9ad203a6a7b2b664770
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