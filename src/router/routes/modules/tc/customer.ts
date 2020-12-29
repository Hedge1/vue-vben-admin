import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const customer: AppRouteModule = {
  path: '/customer',
  name: 'Customer',
  component: LAYOUT,
  redirect: '/customer/merchantList',
  meta: {
    icon: 'raphael:customer',
    title: t('routes.tc.customer.customerManage'),
  },
  children: [
    {
      path: 'merchantList',
      name: 'merchantList',
      meta: {
        title: t('routes.tc.customer.merchantList'),
      },
      component: () => import('/@/views/tc/task/Task.vue'),
    },
    {
      path: 'addCustomer',
      name: 'addCustomer',
      meta: {
        title: t('routes.tc.customer.addCustomer'),
      },
      component: () => import('/@/views/tc/task/Task.vue'),
    },
    {
      path: 'productList',
      name: 'productList',
      meta: {
        title: t('routes.tc.customer.productList'),
      },
      component: () => import('/@/views/tc/task/Task.vue'),
    },
  ],
};

export default customer;
