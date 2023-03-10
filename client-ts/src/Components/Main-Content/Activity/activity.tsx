import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/footer";
import Navbar from "../../Navbar/Navbar/navbar";

import getActivity from "../../../Models/getActivity";
import Repo from "../../../Repositories/index";

import "./activity.css";
import config from "../../../Config/conf";

import { addRole } from "../../../Config/provider";
import { Filter } from "../../../Repositories/ActivityRepository";

const coverHome = require("../../../Assets/cover_homePage/coverHome.png");

function Activity() {
  const [activitiesList, setActivitiesList] = useState<getActivity[]>([]);
  const [candidate, setCandidate] = useState(false)
  const [firstcome, setFirstcome] = useState(false)
  const [all, setAll] = useState(true)
  const [search, setSearch] = useState('')

  const handleChangeSearchFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    console.log(search)
  }

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

  const fetchData = async () => {
   const params : Filter = {
        keyword: search
    }

    const result = await Repo.ActivityRepository.getActivity(params)
    if (result) {
      setActivitiesList(result)
    }
  };

  useEffect(() => {
    fetchData();
    addRole()
  }, [search]);

  return (
    <>
      <div className="home-container">
        <div className="home-h-e-a-d"></div>
        <img className="coverHome" src={coverHome} alt="cover" />
        <div className="home-m-i-d-d-l-e">
          <div className="home-main">
            <div className="home-main-content">
              <div className="main-content-container">
                <div className="main-content-redline"></div>
                <header className="main-content-topic">
                  <h1 className="content-Topic">ACTIVITY</h1>
                </header>
                <div className="main-content-content">
                {all &&
                    activitiesList.filter(
                      (activity) =>
                        activity.attributes.activityType === "FirstcomeFirstserve" || activity.attributes.activityType === "Candidate" 
                    )
                      .map((activity) => (
                        <Link
                          key={activity.attributes.activityType}
                          to={`/activityDetail/${activity.attributes.activityType}/${activity.id}`}
                          className="activity-link"
                        >
                          <div className="activity">
                            <div className="activity-image">
                              <img
                                className="activity-image-image"
                                src={
                                  config.apiPrefix +
                                  activity?.attributes?.image?.data?.attributes
                                    ?.url
                                }
                                alt=""
                              />
                            </div>
                            <div className="activity-text">
                              <div className="activity-title">
                                <h1 className="activity-title-title">
                                  {activity.attributes.title}
                                </h1>
                              </div>
                              <div className="activity-description">
                                <span className="activity-description-description">
                                  {activity.attributes.description}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  {candidate &&
                    activitiesList.filter(
                      (activity) =>
                        activity.attributes.activityType === "Candidate"
                    )
                      .map((activity) => (
                        <Link
                          key={activity.attributes.activityType}
                          to={`/activityDetail/${activity.attributes.activityType}/${activity.id}`}
                          className="activity-link"
                        >
                          <div className="activity">
                            <div className="activity-image">
                              <img
                                className="activity-image-image"
                                src={
                                  config.apiPrefix +
                                  activity?.attributes?.image?.data?.attributes
                                    ?.url
                                }
                                alt=""
                              />
                            </div>
                            <div className="activity-text">
                              <div className="activity-title">
                                <h1 className="activity-title-title">
                                  {activity.attributes.title}
                                </h1>
                              </div>
                              <div className="activity-description">
                                <span className="activity-description-description">
                                  {activity.attributes.description}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  {firstcome &&
                    activitiesList.filter(
                      (activity) =>
                        activity.attributes.activityType === "FirstcomeFirstserve"
                    )
                      .map((activity) => (
                        <Link
                          key={activity.attributes.activityType}
                          to={`/activityDetail/${activity.attributes.activityType}/${activity.id}`}
                          className="activity-link"
                        >
                          <div className="activity">
                            <div className="activity-image">
                              <img
                                className="activity-image-image"
                                src={
                                  config.apiPrefix +
                                  activity?.attributes?.image?.data?.attributes
                                    ?.url
                                }
                                alt=""
                              />
                            </div>
                            <div className="activity-text">
                              <div className="activity-title">
                                <h1 className="activity-title-title">
                                  {activity.attributes.title}
                                </h1>
                              </div>
                              <div className="activity-description">
                                <span className="activity-description-description">
                                  {activity.attributes.description}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
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
                        <span onClick={filterFirstcome} className="filter-selection-span">
                          FIRST COME FIRST SERVE
                        </span>
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
    </>
  );
}

export default Activity;
