<template>
  <div class="p-4">
    <BasicTable @register="registerTable"></BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { CollapseContainer } from '/@/components/Container/index';
  import { getTaskListByName } from '/@/api/tc/task';
  export default defineComponent({
    components: { BasicTable, CollapseContainer },
    setup: function () {
      const [registerTable, {}] = useTable({
        canResize: false,
        title: '任务列表',
        titleHelpMessage: '任务列表',
        api: getTaskListByName,
        columns: getBasicColumns(),
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
        },
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
      });
      return {
        registerTable,
      };
    },
  });
</script>
