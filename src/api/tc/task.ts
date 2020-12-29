import { defHttp } from '/@/utils/http/axios';
import { TaskParams, TaskParams1, TaskListGetResultModel } from './model/taskModel';

enum Api {
  TASK_LIST = '/task/getTaskList',
  TASK_LIST1 = '/task/getTaskListByName',
}

/**
 * @description: Get sample list value
 */
export function getTaskList(params: TaskParams) {
  console.log(params);
  return defHttp.request<TaskListGetResultModel>({
    url: Api.TASK_LIST,
    method: 'GET',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

export function getTaskListByName(params: TaskParams1) {
  console.log(params);
  return defHttp.request<TaskListGetResultModel>({
    url: Api.TASK_LIST1,
    method: 'GET',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
