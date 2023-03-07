import { ActivityRepository } from "./ActivityRepository";
import { UserRepository } from "./UserRepository";

const repositories = {
  ActivityRepository: new ActivityRepository(),
  UserRepository: new UserRepository(),
};

export default repositories;
