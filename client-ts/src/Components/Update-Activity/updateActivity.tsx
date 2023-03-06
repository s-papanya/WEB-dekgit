import { ReactNode } from "react";
import { Button, Input } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import "./updateActivity.css";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function UpdateActivity(props: ModalType) {
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
                    <div className="update-activity-description">
                      <Input
                        className="update-activity-input-title"
                        type="text"
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
                      <select className="update-activity-input-activityType">
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
              <Button className="update-activity-button">Save</Button>
            </form>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
