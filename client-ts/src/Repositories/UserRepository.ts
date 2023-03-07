import { IRepository } from "./IRepository";
import getRegistration from "../Models/getRegistation";
import postRegistration from "../Models/postRegistation";

import config from "../Config/config";

import { userData } from "../Config/provider";


const user = userData();

export class UserRepository implements IRepository<getRegistration | postRegistration> {
  urlPrefix = config.remoteRepositoryUrlPrefix;

  async count(id: string | number): Promise<getRegistration | null> {
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
  
  async discount(id: string | number): Promise<getRegistration | null> {
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

  async applyActivity(data: any): Promise<postRegistration> {
    const resp = await fetch("http://localhost:1337/api/registrations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ` + user.jwt,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await resp.json();
    return res.data;
  }

  async adminCheckActivity(
    id: string | undefined
  ): Promise<getRegistration[] | null> {
    const resp = await fetch(
      `http://localhost:1337/api/registrations?filters[activityId]=${id}`
    );
    const data = await resp.json();
    return data.data;
  }
}
