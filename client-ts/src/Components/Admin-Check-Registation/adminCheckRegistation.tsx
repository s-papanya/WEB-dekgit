import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

import postRegistration from "../../Models/postRegistation";
import getRegistration from "../../Models/getRegistation";
import Repo from "../../Repositories/index";

import "./adminCheckRegistation.css";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

function AdminCheckActivity(props: ModalType) {
  const { activityId } = useParams<{ activityId: string }>();
  const { activityType } = useParams<{ activityType: string }>();
  const [userRegister, setUserRegister] = useState<getRegistration[]>([]);
  const [checkCandidate, setCheckActivity] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const fetchUser = async () => {
    try {
      const data = await Repo.UserRepository.adminCheckActivity(activityId);
      if (data) {
        setUserRegister(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const newConfirm = {
    data: {
      status: "Registered.",
    },
  };

  const cancelConfirm = {
    data: {
      status: "Please wait for admin to confirm.",
    },
  };
  const Cancel = async (index: any) => {
    await Repo.UserRepository.adminConfirm(index, String(cancelConfirm));
  };

  const Confirm = async (index: any) => {
    const res = await Repo.UserRepository.adminConfirm(
      index,
      String(newConfirm)
    );
    console.log(String(newConfirm))
    if (res) {
      console.log(res);
    }
  };

  const handleUserSelect = async (userIndex: any) => {
    setSelectedUsers((prevSelectedUsers: any) => {
      if (prevSelectedUsers.includes(userIndex)) {
        // ถ้าเลือกรายการนี้แล้ว ให้ลบออกจาก state
        return prevSelectedUsers.filter((index: any) => index !== userIndex);
      } else {
        // ถ้ายังไม่เลือกรายการนี้ ให้เพิ่มลงใน state
        return [...prevSelectedUsers, userIndex];
      }
    });
  };

  useEffect(() => {
    if (activityType === "Candidate") {
      setCheckActivity(false);
    } else {
      setCheckActivity(true);
    }

    fetchUser();
  }, [activityId, checkCandidate]);
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
            {checkCandidate ? (
              <div className="admin-check-activity-form">
                <h1 className="admin-check-activity-h1">
                  Activity First Come First Serve
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
            ) : (
              <div className="admin-check-activity-form">
                <h1 className="admin-check-activity-h1">Activity Candidate</h1>
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
                            <input
                              placeholder="Enter your name"
                              type="checkbox"
                              checked={selectedUsers.includes(index as never)}
                              onChange={() => handleUserSelect(index)}
                              onClick={() => Confirm(index)}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}

export default AdminCheckActivity;
