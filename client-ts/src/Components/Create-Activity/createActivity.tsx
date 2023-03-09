import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Button, Input, TextField } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import "./createActivity.css"
import Swal from "sweetalert2";

import { ResultType } from "../../Models/postActivity";
import Repo from "../../Repositories";
import { useNavigate } from "react-router-dom";

function CreateActivity() {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [participant, setParticipant] = useState<number>(0);
  const [activityType, setActivityType] = useState<ResultType>(
    ResultType.FirstcomeFirstserve
  );
  const [registrationStart, setRegistrationStart] = useState<string>("");
  const [registrationEnd, setRegistrationEnd] = useState<string>("");
  const [activityStart, setActivityStart] = useState<string>("");
  const [activityEnd, setActivityEnd] = useState<string>("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setDescription(event.target.value);
  };

  const handleDetailChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setDetail(event.target.value);
  };

  const handleActivityTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === "Candidate") {
      setActivityType(ResultType.Candidate);
    } else {
      setActivityType(ResultType.FirstcomeFirstserve);
    }
  };

  const handleParticipantChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParticipant(parseInt(e.target.value));
  };

  const handleRegistrationStartChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegistrationStart(e.target.value);
  };

  const handleRegistrationEndChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegistrationEnd(e.target.value);
  };

  const handleActivityStartChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActivityStart(e.target.value);
  };

  const handleActivityEndChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActivityEnd(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registerStart = new Date(registrationStart);
    const registerEnd = new Date(registrationEnd);
    const activitiesStart = new Date(activityStart);
    const activitiesEnd = new Date(activityEnd);

    const newActivity = new FormData();

    newActivity.append("files.image", image!);
    newActivity.append(
      "data",
      JSON.stringify({
        title,
        description,
        detail,
        participant,
        activityType,
        registrationStart: registerStart.toISOString().substring(0, 10),
        registrationEnd: registerEnd.toISOString().substring(0, 10),
        activityStart: activitiesStart.toISOString().substring(0, 10),
        activityEnd: activitiesEnd.toISOString().substring(0, 10),
      })
    );

    try {
      Swal.fire({
        title: "Do you want to save the create activity?",
        showCancelButton: true,
        confirmButtonText: "Create",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await Repo.ActivityRepository.createActivity(newActivity);
          Swal.fire({
            title: "Create successfully",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Error",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      });
    } catch (error) {
      debugger;
      Swal.fire({
        title: "Error",
        text: "Error",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="create-activity-modal-box">
      <form className="update-activity-form" onSubmit={handleSubmit}>
        <div className="update-activity-form-container">
          <div className="update-activity-form-input">
            <div className="update-activity-container">
              <div className="update-activity-title">
                <span className="update-activity-input-title-title">
                  Name activity
                </span>
                <Input
                  className="update-activity-input-title"
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={handleTitleChange}
                  required
                />
              </div>
            </div>
            <div className="update-activity-container">
              <div className="update-activity-description">
                <span className="update-activity-input-title-title">
                  Description(Show on home page)
                </span>
                <TextareaAutosize
                  className="update-activity-input-description"
                  placeholder="Description"
                  value={description}
                  onChange={handleDescriptionChange}
                  required
                />
              </div>
            </div>
            <div className="update-activity-container">
              <div className="update-activity-detail">
                <span className="update-activity-input-title-title">
                  Detail
                </span>
                <TextareaAutosize
                  className="update-activity-input-detail"
                  placeholder="Detail"
                  value={detail}
                  onChange={handleDetailChange}
                  required
                />
              </div>
            </div>
            <div className="update-activity-container">
              <div className="update-activity-activity-type">
                <span className="update-activity-input-title-title">
                  Activity type
                </span>
                <select
                  value={activityType}
                  onChange={handleActivityTypeChange}
                  title="Choose activity type"
                >
                  <option value={ResultType.FirstcomeFirstserve}>
                    First come first serve
                  </option>
                  <option value={ResultType.Candidate}>Candidate</option>
                </select>
              </div>
              <div className="update-activity-participant">
                <span className="update-activity-input-title-title">
                  Participant
                </span>
                <Input
                  className="update-activity-input"
                  type="number"
                  placeholder="Participant"
                  value={participant}
                  onChange={handleParticipantChange}
                  required
                />
              </div>
            </div>
            <div className="update-margin-bottom"></div>
            <div className="update-activity-container">
              <div className="update-activity-registration-start">
                <span className="update-activity-input-title-title">
                  Registration Start
                </span>
                <Input
                  className="update-activity-input"
                  type="date"
                  placeholder="Registration start"
                  value={registrationStart}
                  onChange={handleRegistrationStartChange}
                  required
                />
              </div>
              <div className="update-activity-registration-end">
                <span className="update-activity-input-title-title">
                  Registration End
                </span>
                <Input
                  className="update-activity-input"
                  type="date"
                  placeholder="Registration End"
                  value={registrationEnd}
                  onChange={handleRegistrationEndChange}
                  required
                />
              </div>
            </div>
            <div className="update-activity-container">
              <div className="update-activity-activity-start">
                <span className="update-activity-input-title-title">
                  Activity Start
                </span>
                <Input
                  className="update-activity-input"
                  type="date"
                  placeholder="Activity start"
                  value={activityStart}
                  onChange={handleActivityStartChange}
                  required
                />
              </div>
              <div className="update-activity-activity-end">
                <span className="update-activity-input-title-title">
                  Activity End
                </span>
                <Input
                  className="update-activity-input"
                  type="date"
                  placeholder="Activity start"
                  value={activityEnd}
                  onChange={handleActivityEndChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="update-activity-container">
          <div className="update-activity-title">
            <span className="update-activity-input-title-title">Picture</span>
            <input
              required
              placeholder="image"
              type="file"
              accept="image/*"
              style={{ display: "flex" }}
              onChange={(event) =>
                setImage(event.target.files ? event.target.files[0] : null)
              }
            />
          </div>
        </div>
        <div className="create-activity-button-container">
          <Button type="submit" className="update-activity-button-save">
            Create Activity
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateActivity;
