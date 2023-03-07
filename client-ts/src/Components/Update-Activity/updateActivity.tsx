import { ReactNode } from "react";
import { useParams , useNavigate} from "react-router-dom";
import { Button, Input } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import Repo from "../../Repositories/index";
import ModelActivity from "../../Models/getActivity";

import "./updateActivity.css";
import Swal from "sweetalert2";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

function UpdateActivity(props: ModalType) {
  const navigate = useNavigate();
  const { activityId } = useParams<{ activityId: string }>();

  const handleDelete = async () => {
    Swal.fire({
      title: "Delete",
      text: "Are you sure you want to Delete ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await Repo.ActivityRepository.deleteActivity(Number(activityId));
        navigate("/")
      }
    });
  };

  const handleSave = () => {
    Swal.fire({
      title: "Save",
      text: "Are you sure you want to Save ?",
      icon: "warning",
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: "#65ce57",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });
  };

  return (
    <>
      {props.isOpen && (
        <div className="update-activity-model-overlay" onClick={props.toggle}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="update-activity-modal-box"
          >
            <form className="update-activity-form">
              <h1 className="update-activity-h1">Edit Activity</h1>
              <span className="update-activity-span">
                You can edit and change the activity.
              </span>
              <div className="update-activity-form-container">
                <div className="update-activity-form-input">
                  <div className="update-activity-container">
                    <div className="update-activity-title">
                      <Input
                        className="update-activity-input-title"
                        type="text"
                        placeholder="Title"
                      />
                    </div>
                  </div>
                  <div className="update-activity-container">
                    <div className="update-activity-description">
                      <TextareaAutosize
                        className="update-activity-input-description"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                  <div className="update-activity-container">
                    <div className="update-activity-detail">
                      <TextareaAutosize
                        className="update-activity-input-detail"
                        placeholder="Detail"
                      />
                    </div>
                  </div>
                  <div className="update-activity-container">
                    <div className="update-activity-activity-type">
                      <select
                        className="update-activity-input-activityType"
                        title="Choose activity type"
                      >
                        <option>First come first serve</option>
                        <option>Candidate</option>
                      </select>
                    </div>
                    <div className="update-activity-participant">
                      <Input
                        className="update-activity-input"
                        type="number"
                        placeholder="Participant"
                      />
                    </div>
                  </div>
                  <div className="update-activity-container">
                    <div className="update-activity-registration-start">
                      <Input
                        className="update-activity-input"
                        type="date"
                        placeholder="Registration start"
                      />
                    </div>
                    <div className="update-activity-registration-end">
                      <Input
                        className="update-activity-input"
                        type="date"
                        placeholder="Registration end"
                      />
                    </div>
                  </div>
                  <div className="update-activity-container">
                    <div className="update-activity-activity-start">
                      <Input
                        className="update-activity-input"
                        type="date"
                        placeholder="Activity start"
                      />
                    </div>
                    <div className="update-activity-activity-end">
                      <Input
                        className="update-activity-input"
                        type="date"
                        placeholder="Activity end"
                      />
                    </div>
                  </div>
                  <div className="update-activity-container">
                    <div className="update-activity-image">
                      <Input
                        className="update-activity-input"
                        type="text"
                        placeholder="Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="margin-buttom"></div>
              <div className="update-activity-button-container">
                <div className="update-activity-button-container-in">
                  <Button
                    className="update-activity-button-delete"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </div>
                <div className="update-activity-button-container-in">
                  <Button
                    className="update-activity-button-save"
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}

export default UpdateActivity;
