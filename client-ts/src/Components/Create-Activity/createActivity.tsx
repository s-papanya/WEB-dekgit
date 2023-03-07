import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Button, Input } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import PostActivity, { ResultType } from "../../Models/postActivity";
import Repo from "../../Repositories";

function CreateActivity() {
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

    const newActivity: PostActivity = {
      data: {
        title: title,
        description: description,
        detail: detail,
        participant: participant,
        activityType: activityType,
        registrationStart: registerStart.toISOString().substring(0, 10),
        registrationEnd: registerEnd.toISOString().substring(0, 10),
        activityStart: activitiesStart.toISOString().substring(0, 10),
        activityEnd: activitiesEnd.toISOString().substring(0, 10),
      },
    };
    await Repo.ActivityRepository.createActivity(newActivity);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <TextareaAutosize
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
        required
      />
      <TextareaAutosize
        placeholder="Detail"
        value={detail}
        onChange={handleDetailChange}
        required
      />
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

      <Input
        type="number"
        placeholder="Participant"
        value={participant}
        onChange={handleParticipantChange}
        required
      />
      <Input
        type="date"
        placeholder="Registration start"
        value={registrationStart}
        onChange={handleRegistrationStartChange}
        required
      />
      <Input
        type="date"
        placeholder="Registration End"
        value={registrationEnd}
        onChange={handleRegistrationEndChange}
        required
      />
      <Input
        type="date"
        placeholder="Activity start"
        value={activityStart}
        onChange={handleActivityStartChange}
        required
      />
      <Input
        type="date"
        placeholder="Activity start"
        value={activityEnd}
        onChange={handleActivityEndChange}
        required
      />
      <Button type="submit">Create</Button>
    </form>
  );
}

export default CreateActivity;
