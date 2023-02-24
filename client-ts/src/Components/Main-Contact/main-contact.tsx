import "./main-contact.css";

function MainContact() {
  const cover_084 = require("../../Assets/cover_developer/developer-1.jfif");
  const cover_116 = require("../../Assets/cover_developer/developer-2.jfif");
  const cover_192 = require("../../Assets/cover_developer/developer-3.jfif");
  const cover_262 = require("../../Assets/cover_developer/developer-4.jfif");
  const cover_274 = require("../../Assets/cover_developer/developer-5.jfif");
  const cover_537 = require("../../Assets/cover_developer/developer-6.jfif");
  return (
    <div className="MainContact-container">
      <header className="MainContact-topic">
        <h1 className="MainContact-heading-topic">Contact Us</h1>
      </header>
      <div className="MainContact-contact">
        <div className="MainContact-row">
          <div className="MainContact-person">
            <div className="MainContact-image">
              <img className="MainContact-cover-image" src={cover_084} alt="" />
            </div>
            <div className="MainContact-information">
              <div className="MainContact-name">
                <h1 className="MainContact-text">Chadaporn</h1>
              </div>
              <div className="MainContact-other">
                <span>Developer</span>
              </div>
              <div className="MainContact-other">
                <span>Email: 6510110084@psu.ac.th</span>
              </div>
            </div>
            <div className="MainContact-button"></div>
          </div>
          <div className="MainContact-person">
            <div className="MainContact-image">
              <img src={cover_116} alt="" className="MainContact-cover-image" />
            </div>
            <div className="MainContact-information">
              <div className="MainContact-name">
                <h1 className="MainContact-text">Silmee Panan</h1>
              </div>
              <div className="MainContact-other">
                <span>Developer</span>
              </div>
              <div className="MainContact-other">
                <span>Email: 6510110116@psu.ac.th</span>
              </div>
            </div>
            <div className="MainContact-button"></div>
          </div>
          <div className="MainContact-person">
            <div className="MainContact-image">
              <img src={cover_192} alt="" className="MainContact-cover-image" />
            </div>
            <div className="MainContact-information">
              <div className="MainContact-name">
                <h1 className="MainContact-text">Thanaphat Panmas</h1>
              </div>
              <div className="MainContact-other">
                <span>Developer</span>
              </div>
              <div className="MainContact-other">
                <span>Email: 6510110192@psu.ac.th</span>
              </div>
            </div>
            <div className="MainContact-button"></div>
          </div>
        </div>
        <div className="MainContact-row">
          <div className="MainContact-person">
            <div className="MainContact-image">
              <img src={cover_262} alt="" className="MainContact-cover-image" />
            </div>
            <div className="MainContact-information">
              <div className="MainContact-name">
                <h1 className="MainContact-text">Pakorn Yoathong</h1>
              </div>
              <div className="MainContact-other">
                <span>Developer</span>
              </div>
              <div className="MainContact-other">
                <span>Email: 6510110262@psu.ac.th</span>
              </div>
            </div>
            <div className="MainContact-button"></div>
          </div>
          <div className="MainContact-person">
            <div className="MainContact-image">
              <img src={cover_274} alt="" className="MainContact-cover-image" />
            </div>
            <div className="MainContact-information">
              <div className="MainContact-name">
                <h1 className="MainContact-text">Papanya</h1>
              </div>
              <div className="MainContact-other">
                <span>Developer</span>
              </div>
              <div className="MainContact-other">
                <span>Email: 6510110274@psu.ac.th</span>
              </div>
            </div>
            <div className="MainContact-button"></div>
          </div>
          <div className="MainContact-person">
            <div className="MainContact-image">
              <img src={cover_537} alt="" className="MainContact-cover-image" />
            </div>
            <div className="MainContact-information">
              <div className="MainContact-name">
                <h1 className="MainContact-text">Ashrof Awae</h1>
              </div>
              <div className="MainContact-other">
                <span>Developer</span>
              </div>
              <div className="MainContact-other">
                <span>Email: 6510110537@psu.ac.th</span>
              </div>
            </div>
            <div className="MainContact-button"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContact;
