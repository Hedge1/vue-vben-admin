import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const task: AppRouteModule = {
  path: '/task',
  name: 'Task',
  component: LAYOUT,
  redirect: '/task/task',
  meta: {
    icon: 'bi:list-task',
    title: t('routes.tc.task.task'),
  },
  children: [
    {
      path: 'task',
      name: 'task',
      meta: {
        title: t('routes.tc.task.task'),
      },
      component: () => import('/@/views/tc/task/Task.vue'),
    },
  ],
};

export default task;
