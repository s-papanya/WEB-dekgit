import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ModelActivity from "../../Models/Activity";
import Repo from "../../Repositories/index";

import "./activityDetailForm.css"

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
          <div className="activity-detail-from-container ">
            <div className="activity-detail-from-redline"></div>
            <header className="activity-detail-from-topic">
              <h1 className="activity-detail-from-text">รายละเอียดกิจกรรม</h1>
            </header>
            <div className="activity-detail-from-detail">
              <div className="activity-detail-from-picture">
                <img
                  alt=""
                  src=""
                  className="activity-detail-from-image"
                />
              </div>
              <div className="activity-detail-from-content-detail">
                <div className="activity-detail-from-name-activity">
                  <h1 className="">{activity.attributes.title}</h1>
                </div>
                <div className="activity-detail-from-detail-activity">

                  <div className="activity-detail-from-title-detail-activity">
                    <h2 className="activity-detail-from-text-title">คำอธิบายกิจกรรม</h2>
                  </div>
                  <div className="activity-detail-from-content-detail-activity">
                    <span className="activity-detail-from-text-content">{activity.attributes.detail}</span>
                  </div>
                </div>
                <div className="activity-detail-from-registration">
                  <div className="activity-detail-from-registration-start">
                    <div className="activity-detail-from-title-registration-start">
                      <h2 className="activity-detail-from-text-title">
                        วันที่เริ่มรับสมัคร :
                      </h2>
                    </div>
                    <div className="activity-detail-from-content-registration-start">
                      <span className="activity-detail-from-text-content">
                        {activity.attributes.registrationStart.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="activity-detail-from-registration-end">
                    <div className="activity-detail-from-title-registration-end">
                      <h2 className="activity-detail-from-text-title">
                        วันที่สิ้นสุดรับสมัคร :
                      </h2>
                    </div>
                    <div className="activity-detail-from-content-registration-end">
                      <span className="activity-detail-from-text-content">
                        {activity.attributes.registrationEnd.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="activity-detail-from-activity-date">
                  <div className="activity-detail-from-activity-start">
                    <div className="activity-detail-from-title-activity-start">
                      <h2 className="activity-detail-from-text-title">
                        วันที่เริ่มกิจกรรม :
                      </h2>
                    </div>
                    <div className="activity-detail-from-content-activity-start">
                      <span className="activity-detail-from-text-content">
                        {activity.attributes.activityStart.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="activity-detail-from-activity-end">
                    <div className="activity-detail-from-title-activity-end">
                      <h2 className="activity-detail-from-text-title">
                        วันที่สิ้นสุดกิจกรรม :
                      </h2>
                    </div>
                    <div className="activity-detail-from-content-activity-end">
                      <span className="activity-detail-from-text-content">
                        {activity.attributes.activityEnd.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="activity-detail-from-participant">
                  <div className="activity-detail-from-title-participant">
                    <h2 className="activity-detail-from-text-title">จำนวนที่รับ :</h2>
                  </div>
                  <div className="activity-detail-from-content-participant">
                    <span className="activity-detail-from-text-content">{activity.attributes.participant}</span>
                  </div>
                </div>
                <div className="activity-detail-from-activity-type">
                  <div className="activity-detail-from-title-activity-type">
                    <h2 className="activity-detail-from-text-title">
                      รูปเเบบกิจกรรม :
                    </h2>
                  </div>
                  <div className="activity-detail-from-content-activity-type">
                    <span className="activity-detail-from-text-content">
                      {activity.attributes.activityType}
                    </span>
                  </div>
                </div>
              </div>
              <div className="activity-detail-from-button">
                <button className="activity-detail-from-button button">
                  แก้ไขรายละเอียดกิจกรรม
                </button>
              </div>
            </div>
          </div>

        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ActivityDetailForm;
