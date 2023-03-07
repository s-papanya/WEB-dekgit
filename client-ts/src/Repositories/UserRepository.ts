import { IRepository } from "./IRepository";
import Registration from "../Models/Registation";

import config from "../Config/config";

import { userData } from "../Config/provider";

const user = userData();

export class UserRepository implements IRepository<Registration> {
  urlPrefix = config.remoteRepositoryUrlPrefix;

  async count(id: string | number): Promise<Registration | null> {
    const resp = await fetch(`http://localhost:1337/api/activity/${id}/count`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ` + user.jwt,
      },
    });
    const data = await resp.json();
    return data.data;
  }
  async discount(id: string | number): Promise<Registration | null> {
    const resp = await fetch(
      `http://localhost:1337/api/activity/${id}/discount`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ` + user.jwt,
        },
      }
    );
    const data = await resp.json();
    return data.data;
  }

  async adminCheckActivity(
    id: string | undefined
  ): Promise<Registration[] | null> {
    const resp = await fetch(
      `http://localhost:1337/api/registrations?filters[activityId]=${id}`
    );
    const data = await resp.json();
    return data.data;
  }
}
