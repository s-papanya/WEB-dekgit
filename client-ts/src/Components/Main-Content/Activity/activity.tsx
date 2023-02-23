import { useEffect, useState } from "react";
import { ActivityRepository } from "../../../Repositories/ActivityRepository";
import ModelActivity from "../../../Repositories/Models/Activity";

import "./activity.css";
import "../main-content.css";

const cover_activity = require("../../../Assets/cover_activity/activity-1.png");

function Activity() {
  const activityRepository = new ActivityRepository();
  const [activities, setActivities] = useState<ModelActivity[] | null>(null);

  useEffect(() => {
    activityRepository.getAll().then((result) => setActivities(result));
  }, [activityRepository]);

  if (activities === null) {
    return <div>ไม่มีข้อมูล</div>;
  }

  return (
    <>
      {activities.map((activity: ModelActivity) => (
        <div key={activity.id} className="activity">
          <div className="activity-image">
            <img className="image" src={cover_activity} alt="" />
          </div>
          <div className="activity-text">
            <div className="activity-title">
              <h1 className="title">{activity.title}</h1>
            </div>
            <div className="activity-description">
              <span className="description">{activity.description}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Activity;
