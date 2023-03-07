export enum ResultType {
  FirstcomeFirstserve = "FirstcomeFirstserve",
  Candidate = "Candidate",
}

export default interface PostActivity {
  data: {
    title: string;
    description: string;
    detail: string;
    activityType: ResultType;
    participant: number;
    registrationStart: string;
    registrationEnd: string;
    activityStart: string;
    activityEnd: string;
  };
}
