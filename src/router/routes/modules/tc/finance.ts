import { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const finance: AppRouteModule = {
  path: '/finance',
  name: 'Finance',
  component: LAYOUT,
  redirect: '/finance/financeManage',
  meta: {
    icon: 'map:finance',
    title: t('routes.tc.finance.financeManage'),
  },
  children: [
    {
      path: 'financeManage',
      name: 'financeManage',
      meta: {
        title: t('routes.tc.finance.financeManage'),
      },
      component: () => import('/@/views/tc/task/Task.vue'),
    },
  ],
};

export default finance;
