import { IRepository } from "./IRepository";
import ModelActivity from "../Models/Activity";
import config from "../Config/config";

import { userData } from "../Config/provider";

const user = userData()

export class ActivityRepository implements IRepository<ModelActivity> {
  urlPrefix = config.remoteRepositoryUrlPrefix;

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
        Authorization: `Bearer `+ user.jwt,
      },
    });
    const data = await res.json();
    return data.data;
  }
}
