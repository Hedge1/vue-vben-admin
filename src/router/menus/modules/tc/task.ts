import type { MenuModule } from '/@/router/types.d';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 1,
  menu: {
    name: t('routes.tc.task.task'),
    path: '/task',
    children: [
      {
        path: 'task',
        name: t('routes.tc.task.task'),
      },
    ],
  },
};
export default menu;
