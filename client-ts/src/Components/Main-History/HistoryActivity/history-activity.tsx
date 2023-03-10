import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { userData } from "../../../Config/provider";

import getActivity from "../../../Models/getActivity";
import getRegistration from "../../../Models/getRegistation";
import Repo from "../../../Repositories/index";

import "./history-activity.css";
import config from "../../../Config/conf";

function HistoryActivity() {
  const [activitiesList, setActivitiesList] = useState<getRegistration[]>([]);
  const [images, setImages] = useState<getActivity[]>([]);

  const user = userData();

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
    <div className="history-activity-wrapper">
      {activitiesList.map((activity) => {
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
  );
}

export default HistoryActivity;
