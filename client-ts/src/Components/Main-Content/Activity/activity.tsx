import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ModelActivity from "../../../Models/Activity";
import Repo from "../../../Repositories/index";

import "./activity.css";

function Activity() {
  const [activitiesList, setActivitiesList] = useState<ModelActivity[]>([]);

  const fetchData = async () => {
    const res = await Repo.ActivityRepository.getActivity();
    if (res) {
      setActivitiesList(res);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {activitiesList.map((activity: ModelActivity) => (
        <Link
          key={activity.id}
          to={`/activityDetail/${activity.id}`}
          className="activity-link"
        >
          <div className="activity">
            <div className="activity-image">
              <img
                className="activity-image-image"
                src={
                  "http://localhost:1337" +
                  activity?.attributes?.image?.data?.attributes?.formats?.large
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
    </>
  );
}

export default Activity;
