import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import getActivity from "../../../Models/getActivity";
import Repo from "../../../Repositories/index";

import "./history-activity.css";

function HistoryActivity() {
    const [activitiesList, setActivitiesList] = useState<getActivity[]>([]);

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
            {activitiesList.map((activity: getActivity) => (
                <Link
                    key={activity.id}
                    to={`/activityDetail/${activity.id}`}
                    className="activity-link"
                >

                    <div className="history-activity-content">
                        <div className="history-activity-history">
                            <div className="history-activity-image">
                                <img
                                    alt=""
                                    src={"http://localhost:1337" +
                                        activity?.attributes?.image?.data?.attributes?.formats?.large
                                            ?.url}
                                    className="history-activity-image1"
                                />
                            </div>
                            <div className="history-activity-content-history">
                                <div className="history-activity-history-title-activity">
                                    <h1>{activity.attributes.title}</h1>
                                </div>
                                <div className="history-activity-historydate">
                                    <div className="history-activity-history-activity-start">
                                        <div className="history-activity-title-start-activity">
                                            <h2>วันที่เริ่มกิจกรรม</h2>
                                        </div>
                                        <div className="history-activity-content-start-activity">
                                            <span className="history-activity-text3">{activity.attributes.activityStart.toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    <div className="history-activity-history-activity-end">
                                        <div className="history-activity-title-end-activity">
                                            <h2>วันที่สิ้นสุดกิจกรรม</h2>
                                        </div>
                                        <div className="history-activity-content-end-activity">
                                            <span className="history-activity-text-content">{activity.attributes.activityEnd.toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="history-activity-history-status">
                                    <span className="history-activity-text-status"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default HistoryActivity;
