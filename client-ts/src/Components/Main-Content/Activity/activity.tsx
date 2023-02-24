import { useEffect, useState } from "react";

import ModelActivity from "../../../Models/Activity";
import Repo from "../../../Repositories/index";

import "./activity.css";

const cover_activity = require("../../../Assets/cover_activity/activity-1.png");

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
        <div key={activity.id} className="activity">
          <div className="activity-image">
            <img className="image" src={cover_activity} alt="" />
          </div>
          <div className="activity-text">
            <div className="activity-title">
              <h1 className="title">{activity.attributes.title}</h1>
            </div>
            <div className="activity-description">
              <span className="description">
                {activity.attributes.description}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Activity;
