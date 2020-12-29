import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess } from '../_util';

const demoList1 = (() => {
  const result: any[] = [];
  for (let index = 0; index < 60; index++) {
    result.push({
      id: `1+${index}`,
      beginTime: '@datetime',
      endTime: '@datetime',
      address: '@city()',
      name: '@cname()',
      'no|100000-10000000': 100000,
      'status|1': ['normal', 'enable', 'disable'],
    });
  }
  return result;
})();

export default [
  {
    url: '/api/task/getTaskListByName',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { name = 'n', page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, demoList1);
    },
  },
] as MockMethod[];
