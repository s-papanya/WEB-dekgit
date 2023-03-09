import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { roleData, userData } from "../../Config/provider";

import postRegistration from "../../Models/postRegistation";
import getActivity from "../../Models/getActivity";
import Repo from "../../Repositories/index";

import UpdateActivity from "../Update-Activity/updateActivity";
import AdminCheckActivity from "../Admin-Check-Registation/adminCheckRegistation";
import useModal from "../Hook/useModal";

import Swal from "sweetalert2";
import "./activityDetailForm.css";

function ActivityDetailForm() {
  const { activityId } = useParams<{ activityId: string }>();
  const [activity, setActivity] = useState<getActivity | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isApply, setIsApply] = useState(false);
  const { isOpen: isUpdateOpen, toggle: toggleUpdate } = useModal();
  const { isOpen: isAdminCheckOpen, toggle: toggleAdminCheck } = useModal();
  const user = userData();
  const role = roleData();

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

  const image = `http://localhost:1337${activity?.attributes.image.data.attributes.url}`;

  const handleApply = async () => {
    const userApply: postRegistration = {
      data: {
        title: activity?.attributes.title.toString(),
        status: "Registered",
        username: user.username,
        activityId: String(activityId),
        Image: image,
      },
    };
    Swal.fire({
      title: "Apply",
      text: "Are you sure you want to Apply ?",
      icon: "warning",
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: "#65ce57",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            title: "Activity registered",
            icon: "success",
          });
          await Repo.UserRepository.count(Number(activityId));
          await Repo.UserRepository.applyActivity(userApply);
          fetchData();
          setIsApply(true);
        } catch (err) {
          console.error(err);
        }
      }
    });
  };

  const handleCancel = () => {
    Swal.fire({
      title: "Cancel",
      text: "Are you sure you want to Cancel ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            title: "Registration canceled",
            icon: "success",
          });
          await Repo.UserRepository.discount(Number(activityId));
          fetchData();
          const data = await Repo.UserRepository.checkApply(
            activityId,
            user.username
          );
          if (data.length > 0) {
            await Repo.UserRepository.cancelActivity(data[0].id);
          }
          setIsApply(false);
        } catch (err) {
          console.error(err);
        }
      }
    });
  };

  const Registered = async () => {
    try {
      const data = await Repo.UserRepository.checkApply(
        activityId,
        user.username
      );
      if (data.length > 0) {
        setIsApply(true);
      } else {
        setIsApply(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const jwt = user.jwt;
    setIsLoggedIn(jwt ? true : false);

    const admin = role.role;
    if (admin === "admin") {
      setIsAdmin(true);
    }
    fetchData();
    Registered();
  }, [isAdmin, activityId]);

  return (
    <div className="activity-detail-background-image">
      <img
        alt=""
        src={image}
        className="activity-detail-background-image-image"
      />
      <div className="home-main">
        <div className="activity-detail-from-container ">
          <div className="activity-detail-from-redline"></div>
          <header className="activity-detail-from-topic">
            <h1 className="activity-detail-from-text">รายละเอียดกิจกรรม</h1>
          </header>
          {activity ? (
            <div className="activity-detail-from-detail">
              <div className="activity-detail-from-picture">
                <img
                  alt=""
                  src={image}
                  className="activity-detail-from-image"
                />
              </div>
              <div className="activity-detail-from-content-detail">
                <div className="activity-detail-from-name-activity">
                  <h1 className="">{activity.attributes.title}</h1>
                </div>
                <div className="activity-detail-from-detail-activity">
                  <div className="activity-detail-from-title-detail-activity">
                    <h2 className="activity-detail-from-text-title">
                      คำอธิบายกิจกรรม
                    </h2>
                  </div>
                  <div className="activity-detail-from-content-detail-activity">
                    <span className="activity-detail-from-text-content">
                      {activity.attributes.detail}
                    </span>
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
                <div className="activity-detail-from-activity-date">
                  <div className="activity-detail-from-activity-start">
                    <div className="activity-detail-from-title-activity-start">
                      <h2 className="activity-detail-from-text-title">
                        จำนวนที่รับ :
                      </h2>
                    </div>
                    <div className="activity-detail-from-content-activity-start">
                      <span className="activity-detail-from-text-content">
                        {activity.attributes.participant}
                      </span>
                    </div>
                  </div>
                  <div className="activity-detail-from-activity-end">
                    <div className="activity-detail-from-title-activity-end">
                      <h2 className="activity-detail-from-text-title">
                        จำนวนผู้สมัคร :
                      </h2>
                    </div>
                    <div className="activity-detail-from-content-activity-end">
                      <span className="activity-detail-from-text-content">
                        {activity.attributes.count}
                      </span>
                    </div>
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
              <div className="margin-buttom"></div>
              <div className="activity-detail-from-grid-button">
                {isLoggedIn ? (
                  <>
                    {isAdmin ? (
                      <>
                        <Button
                          className="activity-detail-from-button-edit"
                          onClick={toggleUpdate}
                        >
                          แก้ไขรายละเอียดกิจกรรม
                        </Button>
                        <UpdateActivity
                          isOpen={isUpdateOpen}
                          toggle={toggleUpdate}
                        ></UpdateActivity>
                        <Button
                          className="activity-detail-from-button-check"
                          onClick={toggleAdminCheck}
                        >
                          เช็ครายชื่อผู้สมัคร
                        </Button>
                        <AdminCheckActivity
                          isOpen={isAdminCheckOpen}
                          toggle={toggleAdminCheck}
                        ></AdminCheckActivity>
                      </>
                    ) : (
                      <>
                        {isApply ? (
                          <Button
                            className="activity-detail-from-button-edit"
                            onClick={handleCancel}
                          >
                            ยกเลิกสมัครเข้าร่วมกิจกรรม
                          </Button>
                        ) : (
                          <Button
                            className="activity-detail-from-button-apply"
                            onClick={handleApply}
                          >
                            สมัครเข้าร่วมกิจกรรม
                          </Button>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <div className="activity-detail-from-cannot-login">
                    <p className="activity-detail-from-cannot-login-p">
                      Login to activate the activity.
                      <a
                        className="activity-detail-from-cannot-login-a"
                        href="/login"
                      >
                        {" "}
                        Click to go to the login page.
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ActivityDetailForm;
