import type { MenuModule } from '/@/router/types.d';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 2,
  menu: {
    name: t('routes.tc.customer.customerManage'),
    path: '/customer',
    children: [
      {
        path: 'merchantList',
        name: t('routes.tc.customer.merchantList'),
      },
      {
        path: 'productList',
        name: t('routes.tc.customer.productList'),
      },
      {
        path: 'addCustomer',
        name: t('routes.tc.customer.addCustomer'),
      },
    ],
  },
};
export default menu;
