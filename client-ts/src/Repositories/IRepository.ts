export interface IRepository<T> {
  getActivity?(filter: any | undefined): Promise<T[] | null>; //Promise<T[] | null> คือ คำสั่งคืนผลลัพธ์เป็น promise  และผลลัพธ์ของ promise อาจเป็น array ของ T หรือ null
  getActivityById?(id: string | number): Promise<T | null>; //promise(เป็นobjectที่สามารถแสดงผลลัพธ์การทำงานในอนาคต)
  createActivity?(data: T): Promise<T>; //T คือชนิดของข้อมูลที่ใช้ใน repository
  updateActivity?(id: string | undefined, data: T): Promise<T>;
  deleteActivity?(id: string | number): Promise<void>;

  count?(id: string | number): Promise<T | null>;
  discount?(id: string | number): Promise<T | null>;
  applyActivity?(data: T): Promise<T>;
  cancelActivity?(id: string | number): Promise<void>;
  checkApply?(id: string | undefined, username: string): Promise<T[] | null>;
  adminCheckActivity?(id: string | undefined): Promise<T[] | null>;
}
