import { IRepository } from "./IRepository";
import ModelActivity from "../Models/Activity";
import config from "../Config/config";

import { userData } from "../Config/provider";

const user = userData();

export class ActivityRepository implements IRepository<ModelActivity> {
  urlPrefix = config.remoteRepositoryUrlPrefix;

  async getActivity(): Promise<ModelActivity[] | null> {
    const res = await fetch(`${this.urlPrefix}/activities?populate=*`);
    const data = await res.json();
    return data.data;
  }

  async getActivityById(id: string | number): Promise<ModelActivity | null> {
    const res = await fetch(`${this.urlPrefix}/activities/${id}/?populate=*`);
    const data = await res.json();
    return data.data;
  }

  async createActivity(entity: Partial<ModelActivity>) {
    const res = await fetch(`http://localhost:1337/api/activities`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ` + user.jwt,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entity),
    });
    const data = await res.json();
    return data;
  }

  async updateActivity(
    entity: Partial<ModelActivity>
  ): Promise<ModelActivity | null> {
    const res = await fetch(`http://localhost:1337/api/activities/${entity.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ` + user.jwt,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entity),
    });
    const data = await res.json();
    return data;
  }
}
