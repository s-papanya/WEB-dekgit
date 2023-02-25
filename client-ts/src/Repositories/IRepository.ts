export interface IRepository<T> {
  getActivity(filter: any | undefined): Promise<T[] | null>; //Promise<T[] | null> คือ คำสั่งคืนผลลัพธ์เป็น promise  และผลลัพธ์ของ promise อาจเป็น array ของ T หรือ null
  getActivityById(id: string|number): Promise<T | null>; //promise(เป็นobjectที่สามารถแสดงผลลัพธ์การทำงานในอนาคต)
  //T คือชนิดของข้อมูลที่ใช้ใน repository
}
