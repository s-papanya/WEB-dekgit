import {
  ChangeEvent,
  ChangeEventHandler,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { useParams, useNavigate } from "react-router-dom";
import { Button, Input } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import getActivity from "../../Models/getActivity";
import PostActivity, { ResultType } from "../../Models/postActivity";
import Repo from "../../Repositories/index";

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
  const [activity, setActivity] = useState<getActivity | null>(null);
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

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const value = event.target.value;
    const maxLineLength = 30;
    const lineBreaks = Math.floor(value.length / maxLineLength);
    const newValue =
      value?.match(new RegExp(".{1," + maxLineLength + "}", "g"))?.join("\n") ||
      "";

    setDescription(newValue);
    event.target.style.height = "auto"; // reset ความสูงของ textarea
    event.target.style.height = `${event.target.scrollHeight}px`;

    if (lineBreaks >= 1) {
      event.target.style.paddingBottom = `${lineBreaks * 1.5}rem`;
    } else {
      event.target.style.paddingBottom = "1rem";
    }
  };

  const handleDetailChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const value = event.target.value;
    const maxLineLength = 50;
    const lineBreaks = Math.floor(value.length / maxLineLength);
    const newValue =
      value?.match(new RegExp(".{1," + maxLineLength + "}", "g"))?.join("\n") ||
      "";

    setDetail(newValue);
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;

    if (lineBreaks >= 1) {
      event.target.style.paddingBottom = `${lineBreaks * 1.5}rem`;
    } else {
      event.target.style.paddingBottom = "1rem";
    }
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

    const newActivity: PostActivity = {
      data: {
        title: title || Object(activity?.attributes.title),
        description: description || Object(activity?.attributes.description),
        detail: detail || Object(activity?.attributes.detail),
        participant: participant || Object(activity?.attributes.participant),
        activityType: activityType || ResultType.FirstcomeFirstserve,
        registrationStart:
          registerStart.toISOString().substring(0, 10) ||
          String(activity?.attributes.registrationStart),
        registrationEnd:
          registerEnd.toISOString().substring(0, 10) ||
          String(activity?.attributes.registrationEnd),
        activityStart:
          activitiesStart.toISOString().substring(0, 10) ||
          String(activity?.attributes.activityStart),
        activityEnd:
          activitiesEnd.toISOString().substring(0, 10) ||
          String(activity?.attributes.activityEnd),
      },
    };
    try {
      Swal.fire({
        title: "Do you want to save the changes?",
        showCancelButton: true,
        confirmButtonText: "Save",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await Repo.ActivityRepository.updateActivity(activityId, newActivity);
          Swal.fire({
            title: "Saved successfully",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
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
        Swal.fire({
          title: "Activity is deleted",
          icon: "success",
        });
        await Repo.ActivityRepository.deleteActivity(Number(activityId));
        navigate("/");
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, [activityId]);

  return (
    <>
      {props.isOpen && (
        <div className="update-activity-model-overlay" onClick={props.toggle}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="update-activity-modal-box"
          >
            <form className="update-activity-form" onSubmit={handleSubmit}>
              <h1 className="update-activity-h1">Edit Activity</h1>
              <span className="update-activity-span">
                Select the field you want to edit. Anything you don't fill out
                will stay the same.
              </span>
              <div className="update-activity-form-container">
                <div className="update-activity-form-input">
                  <div className="update-activity-container">
                    <div className="update-activity-title">
                      <span className="update-activity-input-title-title">
                        Name activity
                      </span>
                      <Input
                        inputProps={{ maxLength: 25 }}
                        className="update-activity-input-title"
                        type="text"
                        placeholder="Title"
                        defaultValue={title}
                        onChange={handleTitleChange}
                      />
                    </div>
                  </div>
                  <div className="update-activity-container">
                    <div className="update-activity-description">
                      <span className="update-activity-input-title-title">
                        Description(Show on home page)
                      </span>
                      <TextareaAutosize
                        maxLength={200}
                        className="update-activity-input-description"
                        placeholder="Description"
                        defaultValue={description}
                        onChange={handleDescriptionChange}
                      />
                    </div>
                  </div>
                  <div className="update-activity-container">
                    <div className="update-activity-detail">
                      <span className="update-activity-input-title-title">
                        Detail
                      </span>
                      <TextareaAutosize
                        maxLength={1000}
                        className="update-activity-input-detail"
                        placeholder="Detail"
                        defaultValue={detail}
                        onChange={handleDetailChange}
                      />
                    </div>
                  </div>
                  <div className="update-activity-container">
                    <div className="update-activity-participant">
                      <span className="update-activity-input-title-title">
                        Participant
                      </span>
                      <Input
                        className="update-activity-input"
                        type="number"
                        placeholder="Participant"
                        defaultValue={participant}
                        onChange={handleParticipantChange}
                      />
                    </div>
                  </div>
                  <div className="update-margin-bottom"></div>
                  <span className="update-must-alert">
                    *You need to enter a new date each time other
                    information is updated.
                  </span>
                  <div className="update-activity-date">
                    <div className="update-activity-container">
                      <div className="update-activity-registration-start">
                        <span className="update-activity-input-title-title">
                          Registration Start
                        </span>
                        <Input
                          className="update-activity-input"
                          type="date"
                          placeholder="Registration start"
                          defaultValue={registrationStart}
                          onChange={handleRegistrationStartChange}
                          required
                        />
                        <span className="update-current">
                          current:
                          {activity?.attributes.registrationStart.toLocaleDateString()}
                        </span>
                      </div>
                      <div className="update-activity-registration-end">
                        <span className="update-activity-input-title-title">
                          Registration End
                        </span>
                        <Input
                          className="update-activity-input"
                          type="date"
                          placeholder="Registration End"
                          defaultValue={registrationEnd}
                          onChange={handleRegistrationEndChange}
                          required
                        />
                        <span className="update-current">
                          current:
                          {activity?.attributes.registrationEnd.toLocaleDateString()}
                        </span>
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
                          defaultValue={activityStart}
                          onChange={handleActivityStartChange}
                          required
                        />
                        <span className="update-current">
                          current:
                          {activity?.attributes.activityStart.toLocaleDateString()}
                        </span>
                      </div>
                      <div className="update-activity-activity-end">
                        <span className="update-activity-input-title-title">
                          Activity End
                        </span>
                        <Input
                          className="update-activity-input"
                          type="date"
                          placeholder="Activity start"
                          defaultValue={activityEnd}
                          onChange={handleActivityEndChange}
                          required
                        />
                        <span className="update-current">
                          current:
                          {activity?.attributes.activityEnd.toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="update-activity-button-container">
                <div className="update-activity-button-container-in">
                  <Button
                    className="update-activity-button-delete"
                    onClick={handleDelete}
                    type="button"
                  >
                    Delete
                  </Button>
                </div>
                <div className="update-activity-button-container-in">
                  <Button className="update-activity-button-save" type="submit">
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
