export enum ResultType {
  FirstcomeFirstserve = 1,
  Candidate = -1,
}

export default interface GetActivity {
  id: number;
  attributes: {
    title: string;
    description: string;
    detail: string;
    activityType: ResultType;
    participant: number;
    registrationStart: Date;
    registrationEnd: Date;
    activityStart: Date;
    activityEnd: Date;
    image: {
      data: {
        attributes: {
          formats: {
            large: {
              url: string;
            };
          };
        };
      };
    };
  };
}
