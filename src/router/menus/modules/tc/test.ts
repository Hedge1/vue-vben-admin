import { MenuModule } from '/@/router/types.d';

const menu: MenuModule = {
  orderNo: 0,
  menu: {
    name: '测试',
    path: '/test',
    children: [
      {
        path: 'test',
        name: '哈哈哈',
      },
    ],
  },
};
export default menu;
