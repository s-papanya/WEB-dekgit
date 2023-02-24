export enum ResultType {
  FirstcomeFirstserve = 1,
  Candidate = -1,
}

export default interface Activity {
  id: number;
  attributes: {
    title: string;
    description: string;
    registrationStart: Date;
    registrationEnd: Date;
    activityStart: Date;
    activityEnd: Date;
    participant: number;
    activityType: ResultType;
  };
}
