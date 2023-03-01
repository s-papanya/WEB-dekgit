import { IRepository } from "./IRepository";
import ModelActivity from "../Models/Activity";
import { userData } from "../Config/provider";

const user = userData()

import config from "../Config/config";

export class ActivityRepository implements IRepository<ModelActivity> {
  urlPrefix = config.remoteRepositoryUrlPrefix;
  token = user.jwt

  async getActivity(): Promise<ModelActivity[] | null> {
    const res = await fetch(`${this.urlPrefix}/activities`);
    const data = await res.json();
    return data.data;
  }

  async getActivityById(id: string | number): Promise<ModelActivity | null> {
    const res = await fetch(`${this.urlPrefix}/activities/${id}`);
    const data = await res.json();
    return data.data;
  }

  async createActivity(entity: Partial<ModelActivity>) {
    const res = await fetch(`${this.urlPrefix}/activities`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entity),
    });
    const data = await res.json();
    return data.data;
  }
}
