import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./adminCheckRegistation.css";
import getRegistration from "../../Models/getRegistation";
import Repo from "../../Repositories/index";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

function AdminCheckActivity(props: ModalType) {
  const { activityId } = useParams<{ activityId: string }>();
  const [userRegister, setUserRegister] = useState<getRegistration[]>([]);

  const fetchData = async () => {
    try {
      const data = await Repo.UserRepository.adminCheckActivity(activityId);
      if (data) {
        setUserRegister(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activityId]);
  return (
    <>
      {props.isOpen && (
        <div
          className="admin-check-activity-model-overlay"
          onClick={props.toggle}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="admin-check-activity-modal-box"
          >
            <div className="admin-check-activity-form">
              <h1 className="admin-check-activity-h1">
                Check user registration
              </h1>
              <span className="admin-check-activity-span">
                This page will display all registered users for activity.
              </span>
              <div className="admin-check-activity-container">
                {userRegister.map((user, index) => (
                  <div key={index}>
                    <div className="admin-check-activity-card">
                      <div className="admin-check-activity-card-user">
                        <span className="admin-check-activity-name-title">
                          Name :
                        </span>
                        <span className="admin-check-activity-name">
                          {user.attributes.username}
                        </span>
                        <span className="admin-check-activity-name-title">
                          Date time :
                        </span>
                        <span className="admin-check-activity-name">
                          <span className="history-activity-time">
                            {new Date(user.attributes.createdAt)
                              .toISOString()
                              .slice(0, 19)
                              .replace("T", " ")}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}

export default AdminCheckActivity;
