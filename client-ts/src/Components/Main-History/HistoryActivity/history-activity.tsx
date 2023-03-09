import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { userData } from "../../../Config/provider";

import getRegistration from "../../../Models/getRegistation";
import Repo from "../../../Repositories/index";

import "./history-activity.css";

function HistoryActivity() {
  const [activitiesList, setActivitiesList] = useState<getRegistration[]>([]);

  const user = userData();
  const fetchData = async () => {
    const res = await Repo.UserRepository.userCheckActivity(user.username);
    if (res) {
      setActivitiesList(res);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {activitiesList.map((activity: getRegistration) => (
        <Link
          key={activity.id}
          to={`/activityDetail/${activity.attributes.activityId}`}
          className="activity-link"
        >
          <div className="history-activity-container">
            <div className="history-activity-image">
              <img
                className="history-activity-image-image"
                src={"http://localhost:1337" + activity?.attributes?.image}
                alt=""
              />
            </div>
            <div className="history-activity-text">
              <h4 className="history-activity-head">Name activity</h4>
              <div className="history-activity-title">
                <span className="history-activity-name">
                  {activity.attributes.title}
                </span>
              </div>
              <h4 className="history-activity-head">Time</h4>
              <div className="history-activity-title">
                <span className="history-activity-time">
                  {activity.attributes.createdAt.toString().slice(0, 10)}
                </span>
              </div>
              <h4 className="history-activity-head">Status</h4>
              <div className="history-activity-title">
                <span className="history-activity-status">
                  {activity.attributes.status}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default HistoryActivity;
