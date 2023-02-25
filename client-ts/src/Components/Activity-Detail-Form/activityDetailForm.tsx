import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ModelActivity from "../../Models/Activity";
import Repo from "../../Repositories/index";

function ActivityDetailForm() {
  const { activityId } = useParams<{ activityId: string }>();
  const [activity, setActivity] = useState<ModelActivity | null>(null);

  const fetchData = async () => {
    const res = await Repo.ActivityRepository.getActivityById(
      Number(activityId)
    );
    if (res) {
      const activityData = res.attributes;
      activityData.registrationStart = new Date(activityData.registrationStart);
      activityData.registrationEnd = new Date(activityData.registrationEnd);
      activityData.activityStart = new Date(activityData.activityStart);
      activityData.activityEnd = new Date(activityData.activityEnd);
      setActivity(res);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activityId]);

  return (
    <div>
      {activity ? (
        <>
          <h1>{activity.attributes.title}</h1>
          <p>{activity.attributes.description}</p>
          <p>{activity.attributes.detail}</p>
          <p>{activity.attributes.activityType}</p>
          <p>{activity.attributes.participant}</p>
          <p>{activity.attributes.registrationStart.toLocaleDateString()}</p>
          <p>{activity.attributes.registrationEnd.toLocaleDateString()}</p>
          <p>{activity.attributes.activityStart.toLocaleDateString()}</p>
          <p>{activity.attributes.activityEnd.toLocaleDateString()}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ActivityDetailForm;
