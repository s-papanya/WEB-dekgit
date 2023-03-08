import { IRepository } from "./IRepository";
import GetActivity from "../Models/getActivity";
import PostActivity from "../Models/postActivity";
import config from "../Config/config";

import { userData } from "../Config/provider";

import axios from "axios";

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

  async createActivity(data:any): Promise<PostActivity> {

    const resp = await fetch(`http://localhost:1337/api/activities`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ` + user.jwt
      },
      body: data
    });
    const res = await resp.json();
    return res;
  }

  async updateActivity(
    id: string | undefined,
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

  async deleteActivity(id: string | number): Promise<void> {
    const resp = await fetch(`http://localhost:1337/api/activities/${id}`, {
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
      url: "http://localhost:1337/api/upload",
      data,
    });

    return resp;
  }
}
