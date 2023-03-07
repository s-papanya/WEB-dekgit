import { IRepository } from "./IRepository";
import GetActivity from "../Models/getActivity";
import PostActivity from "../Models/postActivity";
import config from "../Config/config";

import { userData } from "../Config/provider";

const user = userData();

export class ActivityRepository
  implements IRepository<GetActivity | PostActivity>
{
  urlPrefix = config.remoteRepositoryUrlPrefix;

  async getActivity(): Promise<GetActivity[] | null> {
    const res = await fetch(`${this.urlPrefix}/activities?populate=*`);
    const data = await res.json();
    return data.data;
  }

  async getActivityById(id: string | number): Promise<GetActivity | null> {
    const res = await fetch(`${this.urlPrefix}/activities/${id}/?populate=*`);
    const data = await res.json();
    return data.data;
  }

  async createActivity(data: PostActivity): Promise<PostActivity> {
    const resp = await fetch(`http://localhost:1337/api/activities/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ` + user.jwt,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await resp.json();
    return res.data;
  }

  async updateActivity(
    id: string | number,
    data: PostActivity
  ): Promise<PostActivity> {
    const resp = await fetch(`http://localhost:1337/api/activities/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ` + user.jwt,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await resp.json();
    return res.data;
  }
}
