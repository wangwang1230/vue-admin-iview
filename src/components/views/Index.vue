<template>
  <div class="index">
    <Row :gutter="8" >
      <i-col :md='{span:12}'>
        <Chart></Chart>
      </i-col>
      <i-col :md='{span:12}'>
        <Card>
          <p slot="title">
            地图模式
          </p>
          <myMap></myMap>
        </Card>
      </i-col>
    </Row>
    <!--<Row :gutter="8">
     <i-col :md='{span:8}'>
        <Card style="height: 320px">
          <p slot="title">
            10个已经完成，2个待完成，1个正在进行中
          </p>
          <a href="#" slot="extra" @click.prevent="refresh">
            <Icon type="ios-loop-strong"></Icon>
          </a>
          <Steps :current="2" direction="vertical" size="small">
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
          </Steps>
        </Card>
      </i-col>
      <i-col :md='{span:8}'>
        <Card style="height: 320px">
          <Table :columns="columns1" :data="data1" :show-header="false"></Table>
        </Card>
      </i-col>
      <i-col :md='{span:8}'>
        <Card style="height: 320px">
          <p slot="title">
            未读消息
          </p>
          <a href="#" slot="extra" @click.prevent="refresh">
            <Icon type="ios-loop-strong"></Icon>
          </a>
          <Steps :current="2" direction="vertical" size="small">
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="已完成" content="这里是该步骤的描述信息"></Step>
            <Step title="进行中" content="这里是该步骤的描述信息"></Step>
            <Step title="待进行" content="这里是该步骤的描述信息"></Step>
          </Steps>
        </Card>
      </i-col>
    </Row>-->
    <Row :gutter="8">
     <myTable></myTable>
    </Row>
  </div>
</template>
<script>
  import ICol from '../../../node_modules/iview/src/components/grid/col'
  import myMap from './Map.vue'
  import myTable from './Table.vue'
  import Chart from './Chart.vue'
  export default {
    components: {ICol,myMap,myTable,Chart},
    name: 'index',
    data () {
      return {
        params: {
          page: 1,
          limit: 10
        },
        valueText: 5,


      }
    },
    computed: {},
    methods: {
      /**
       * 刷新页面请求
       * */
      refresh () {

      }
    },
    created () {

    }
  }
</script>
<style lang="less" scoped>

  .cardMessage {
    background:#051b30;
    .ivu-icon {
      font-size: 38px;
    }
    .subText {
      color: #9ea7b4;
    }
  }
</style>
