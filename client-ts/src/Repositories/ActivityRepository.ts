import { IRepository } from "./IRepository";
import Activity from "../Repositories/Models/Activity";

export class ActivityRepository implements IRepository<Activity> {
    async getAll(): Promise<Activity[] | null> {
        return [
            {id :1,title: 'Hello World',description: 'The world is not ready for this.'},
            {id :1,title: 'Hello My friend',description: 'The world is not ready for this.'},
            {id :1,title: 'Hello My father',description: 'The world is not ready for this.'},
            {id :1,title: 'Hello My mother',description: 'The world is not ready for this.'}
        ]
    }
}
