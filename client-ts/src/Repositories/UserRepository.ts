import { IRepository } from "./IRepository";
import getRegistration from "../Models/getRegistation";
import postRegistration from "../Models/postRegistation";

import config from "../Config/conf";

import { userData } from "../Config/provider";

const user = userData();

export class UserRepository
  implements IRepository<getRegistration | postRegistration>
{
  urlPrefix = config.apiPrefix;

  async count(id: string | number): Promise<getRegistration | null> {
    const resp = await fetch(`${this.urlPrefix}/api/activity/${id}/count`, {
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
    const resp = await fetch(`${this.urlPrefix}/api/activity/${id}/discount`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ` + user.jwt,
      },
    });
    const data = await resp.json();
    return data.data;
  }

  async applyActivity(data: any): Promise<postRegistration> {
    const resp = await fetch(`${this.urlPrefix}/api/registrations`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ` + user.jwt,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await resp.json();
    return res.data.id;
  }

  async cancelActivity(id: string | number): Promise<void> {
    const resp = await fetch(`${this.urlPrefix}/api/registrations/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ` + user.jwt,
      },
    });
    const data_res = await resp.json();
    return data_res;
  }

  async checkApply(
    id: string | undefined,
    username: string
  ): Promise<getRegistration[]> {
    try {
      const resp = await fetch(
        `${this.urlPrefix}/api/registrations?filters[activityId][$in][0]=${id}&filters[username][$in][1]=${username}`
      );
      const data = await resp.json();
      return data.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async adminCheckActivity(
    id: string | undefined
  ): Promise<getRegistration[] | null> {
    const resp = await fetch(
      `${this.urlPrefix}/api/registrations?filters[activityId]=${id}`
    );
    const data = await resp.json();
    return data.data;
  }

  async userCheckActivity(
    data: string | undefined
  ): Promise<getRegistration[] | null> {
    const resp = await fetch(
      `${this.urlPrefix}/api/registrations?filters[username]=${data}`
    );
    const res = await resp.json();
    return res.data;
  }

  async adminConfirm(
    id: string | undefined,
    data: string
  ): Promise<postRegistration> {
    const resp = await fetch(`${this.urlPrefix}/api/registrations/${id}`, {
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
