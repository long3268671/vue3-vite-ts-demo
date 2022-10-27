declare type TO<T = unknown> = Promise<[unknown, T | undefined]>;

export interface KeyValueType<T> {
      [key: string]: T
    }
    
export interface ResponseObjList{
  code: number | string
  msg?: string,
  data: KeyValueType<string | boolean>[]
}
