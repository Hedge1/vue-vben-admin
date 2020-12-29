import { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 3,
  menu: {
    name: t('routes.tc.finance.financeManage'),
    path: '/finance',
    children: [
      {
        path: 'financeManage',
        name: t('routes.tc.finance.financeManage'),
      },
    ],
  },
};
export default menu;
