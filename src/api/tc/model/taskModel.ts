import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type TaskParams = BasicPageParams;

export interface TaskParams1 {
  name: string;
  page: number;
  pageSize: number;
}

export interface TaskListItem {
  id: string;
  beginTime: string;
  endTime: string;
  address: string;
  name: string;
  no: number;
  status: number;
}

/**
 * @description: Request list return value
 */
export type TaskListGetResultModel = BasicFetchResult<TaskListItem>;
