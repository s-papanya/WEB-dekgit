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
      setActivity(res);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activityId]);

  return (
    <div>
      <h1>{activity?.attributes.title}</h1>
      <p>{activity?.attributes.description}</p>
    </div>
  );
}

export default ActivityDetailForm;
