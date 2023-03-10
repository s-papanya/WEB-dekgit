import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/Navbar/navbar";
import { Link } from "react-router-dom";
import config from "../../Config/conf";
import { useEffect, useState } from "react";
import { userData } from "../../Config/provider";
import getRegistration from "../../Models/getRegistation";
import getActivity from "../../Models/getActivity";
import Repo from '../../Repositories'
import "../../Components/Search-bar/search-bar.css";
import "../../Components/Filter-Selection/Filter-Selection/filter-selection.css";
import "../../Components/Main-History/Main-History/main-history.css";
import "../../Components/Main-History/HistoryActivity/history-activity.css"
import '../../Components/Filter-Selection/Selection/selection.css'


function History() {
  const coverHome = require("../../Assets/cover_homePage/coverHome.png");
  const [activitiesList, setActivitiesList] = useState<getRegistration[]>([]);
  const [images, setImages] = useState<getActivity[]>([]);
  const [candidate, setCandidate] = useState(false)
  const [firstcome, setFirstcome] = useState(false)
  const [all, setAll] = useState(true)

  const user = userData();
  
  const filterCandidate = async () => {
    setCandidate(true)
    setAll(false)
    setFirstcome(false)
  }

  const filterFirstcome = async () => {
    setFirstcome(true)
    setAll(false)
    setCandidate(false)
  }

  const filterAll = async () => {
    setAll(true)
    setCandidate(false)
    setFirstcome(false)

  }

  const fetchActivities = async () => {
    const res = await Repo.UserRepository.userCheckActivity(user.username);
    if (res) {
      setActivitiesList(res);
    }
  };

  const fetchImages = async () => {
    const res = await Repo.ActivityRepository.getActivity();
    if (res) {
      setImages(res);
    }
  };

  useEffect(() => {
    fetchActivities();
    fetchImages();
  }, []);

  return (
    <div className="home-container">
      <div className="home-h-e-a-d"></div>
      <img className="coverHome" src={coverHome} alt="cover" />
      <div className="home-m-i-d-d-l-e">
        <div className="home-main">
          <div className="home-main-content">
            <div className="main-history-container">
              <div className="main-history-redline"></div>
              <header className="main-history-topic">
                <h1 className="main-history-text">HISTORY</h1>
              </header>
              <div className="main-history-content">
                <div className="history-activity-wrapper">
                  {candidate && activitiesList.map((activity) => {
                    activity.attributes.activityType === "Candidate" 
                    const image = images.find(
                      (img) => img.id === parseInt(activity.attributes.activityId)
                    );
                    const activityType = images.find(
                      (img) => img.id === parseInt(activity.attributes.activityType)
                    );
                    
                    return (
                      <Link
                        key={activity.id}
                        to={`/activityDetail/${activityType?.attributes.activityType}/${activity.attributes.activityId}`}
                        className="history-link"
                      >
                        <div
                          key={activity.attributes.activityType}
                          className="history-activity-container"
                        >
                          <div className="history-activity-image">
                            {image && (
                              <img
                                alt=""
                                src={`${config.apiPrefix}${image.attributes.image.data.attributes.url}`}
                                className="history-activity-image-image"
                              />
                            )}
                          </div>
                          <div className="history-activity-text">
                            <h4 className="history-activity-head">Name activity</h4>
                            <div className="history-activity-title">
                              <span className="history-activity-name">
                                {activity.attributes.title}
                              </span>
                            </div>
                            <h4 className="history-activity-head-time">
                              Date time :{" "}
                              <span className="history-activity-time">
                                {new Date(activity.attributes.createdAt)
                                  .toISOString()
                                  .slice(0, 19)
                                  .replace("T", " ")}
                              </span>
                            </h4>
                            <h4 className="history-activity-head">
                              Activtiy type:{" "}
                              <p className="history-activity-status">
                                {activity.attributes.activityType}
                              </p>
                            </h4>
                            <h4 className="history-activity-head">
                              Status :{" "}
                              <p className="history-activity-status">
                                {activity.attributes.status}
                              </p>
                            </h4>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  {firstcome && activitiesList.map((activity) => {
                    const image = images.find(
                      (img) => img.id === parseInt(activity.attributes.activityId)
                    );
                    const activityType = images.find(
                      (img) => img.id === parseInt(activity.attributes.activityType)
                    );

                    return (
                      <Link
                        key={activity.id}
                        to={`/activityDetail/${activityType?.attributes.activityType}/${activity.attributes.activityId}`}
                        className="history-link"
                      >
                        <div
                          key={activity.attributes.activityType}
                          className="history-activity-container"
                        >
                          <div className="history-activity-image">
                            {image && (
                              <img
                                alt=""
                                src={`${config.apiPrefix}${image.attributes.image.data.attributes.url}`}
                                className="history-activity-image-image"
                              />
                            )}
                          </div>
                          <div className="history-activity-text">
                            <h4 className="history-activity-head">Name activity</h4>
                            <div className="history-activity-title">
                              <span className="history-activity-name">
                                {activity.attributes.title}
                              </span>
                            </div>
                            <h4 className="history-activity-head-time">
                              Date time :{" "}
                              <span className="history-activity-time">
                                {new Date(activity.attributes.createdAt)
                                  .toISOString()
                                  .slice(0, 19)
                                  .replace("T", " ")}
                              </span>
                            </h4>
                            <h4 className="history-activity-head">
                              Activtiy type:{" "}
                              <p className="history-activity-status">
                                {activity.attributes.activityType}
                              </p>
                            </h4>
                            <h4 className="history-activity-head">
                              Status :{" "}
                              <p className="history-activity-status">
                                {activity.attributes.status}
                              </p>
                            </h4>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  {all && activitiesList.map((activity) => { 
                    const image = images.find(
                      (img) => img.id === parseInt(activity.attributes.activityId)
                    );
                    const activityType = images.find(
                      (img) => img.id === parseInt(activity.attributes.activityType)
                    );

                    return (
                      <Link
                        key={activity.id}
                        to={`/activityDetail/${activityType?.attributes.activityType}/${activity.attributes.activityId}`}
                        className="history-link"
                      >
                        <div
                          key={activity.attributes.activityId}
                          className="history-activity-container"
                        >
                          <div className="history-activity-image">
                            {image && (
                              <img
                                alt=""
                                src={`${config.apiPrefix}${image.attributes.image.data.attributes.url}`}
                                className="history-activity-image-image"
                              />
                            )}
                          </div>
                          <div className="history-activity-text">
                            <h4 className="history-activity-head">Name activity</h4>
                            <div className="history-activity-title">
                              <span className="history-activity-name">
                                {activity.attributes.title}
                              </span>
                            </div>
                            <h4 className="history-activity-head-time">
                              Date time :{" "}
                              <span className="history-activity-time">
                                {new Date(activity.attributes.createdAt)
                                  .toISOString()
                                  .slice(0, 19)
                                  .replace("T", " ")}
                              </span>
                            </h4>
                            <h4 className="history-activity-head">
                              Activtiy type:{" "}
                              <p className="history-activity-status">
                                {activity.attributes.activityType}
                              </p>
                            </h4>
                            <h4 className="history-activity-head">
                              Status :{" "}
                              <p className="history-activity-status">
                                {activity.attributes.status}
                              </p>
                            </h4>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="home-main-option">
            <div className="home-search-box">
              <div className="search-bar-background">
                <div id="search-bar-cover">
                  <div className="search-bar-tb">
                    <div className="search-bar-td">
                      <input
                        className="search-bar-input"
                        type="text"
                        placeholder="Search"
                        required
                      />
                    </div>
                    <div className="search-bar-td" id="search-bar-s-cover">
                      <button className="search-bar-button" type="submit">
                        <div id="search-bar-s-circle"></div>
                        <span className="search-bar-span">...</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-selection-filter">
              <div className="filter-selection-container">
                <div className="filter-selection-redline"></div>
                <div className="filter-selection-topic">
                  <h1 className="filter-Topic">ACTIVITY TYPE</h1>
                </div>
                <div className="filter-selection-filter">
                  <div className="filter-selection-All">
                    <b className="selection-All filter-selection-b">
                      <span onClick={filterAll} className="filter-selection-span">ALL</span>
                    </b>
                  </div>
                  <div className="filter-selection-FirstComeFirstServe">
                    <b className="selection-FirstComeFirstServe filter-selection-b">
                      <span onClick={filterFirstcome} className="filter-selection-span">FIRST COME FIRST SERVE</span>
                    </b>
                  </div>
                  <div className="filter-selection-Candidate">
                    <b className="selection-Candidate filter-selection-b">
                      <span onClick={filterCandidate} className="filter-selection-span">CANDIDATE</span>
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-f-o-o-t">
        <Footer />
      </div>
      <Navbar />
    </div>
  );
}

export default History;