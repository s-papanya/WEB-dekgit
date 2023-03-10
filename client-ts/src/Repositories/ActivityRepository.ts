import { IRepository } from "./IRepository";
import GetActivity from "../Models/getActivity";
import PostActivity from "../Models/postActivity";
import config from "../Config/conf";

import { userData } from "../Config/provider";

import axios from "axios";

const user = userData();

export interface Filter {
  keyword?:string
}

export class ActivityRepository
  implements IRepository<GetActivity | PostActivity>
{
  urlPrefix = config.apiPrefix;

  async getActivity(filter?:Filter): Promise<GetActivity[] | null> {
    const res = await fetch(`${this.urlPrefix}/api/activities?populate=*`);
    const data = await res.json();
    return data.data;
  }

  async getActivityById(id: string | number): Promise<GetActivity | null> {
    const res = await fetch(`${this.urlPrefix}/api/activities/${id}/?populate=*`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data.data;
  }

  async createActivity(data: any): Promise<PostActivity> {
    const resp = await fetch(`${this.urlPrefix}/api/activities`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ` + user.jwt,
      },
      body: data,
    });
    const res = await resp.json();
    return res;
  }

  async updateActivity(
    id: string | undefined,
    data: PostActivity
  ): Promise<PostActivity> {
    const resp = await fetch(`${this.urlPrefix}/api/activities/${id}`, {
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

  async deleteActivity(id: string | number): Promise<void> {
    const resp = await fetch(`${this.urlPrefix}/api/activities/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ` + user.jwt,
      },
    });
    const data_res = await resp.json();
    return data_res;
  }
  async UploadImageActivity(img: File | null | undefined): Promise<any> {
    if (!img) {
      console.error("No file selected");
      return;
    }

    const data = new FormData();
    data.append("files", img);

    const resp = await axios({
      method: "POST",
      url: `${this.urlPrefix}/upload`,
      data,
    });

    return resp;
  }
}
