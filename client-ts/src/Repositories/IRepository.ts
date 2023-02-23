export interface IRepository<T> {
    getAll(filter: any|undefined): Promise<T[] | null> //Promise<T[] | null> คือ คำสั่งคืนผลลัพธ์เป็น promise  และผลลัพธ์ของ promise อาจเป็น array ของ T หรือ null
    get?(id: string|number): Promise<T | null>         //promise(เป็นobjectที่สามารถแสดงผลลัพธ์การทำงานในอนาคต)
    create?(entity: Partial<T>): Promise<T | null>     //T คือชนิดของข้อมูลที่ใช้ใน repository
    update?(entity: Partial<T>): Promise<T | null>
    delete?(id: string|number): Promise<void>
}     