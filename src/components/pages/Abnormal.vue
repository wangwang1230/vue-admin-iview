
<template>
  <!--<div class="table" style="width: 100%">
    &lt;!&ndash; <Table id="example" class="display" cellspacing="0" width="100%">
       <thead>
       <tr>
         <th>Name</th>
         <th>Position</th>
         <th>Office</th>
         <th>Age</th>
         <th>Start date</th>
         <th>Salary</th>
         <th>Name</th>
         <th>Position</th>
         <th>Office</th>
         <th>Age</th>
         <th>Start date</th>
         <th>Salary</th>
         <th>Name</th>
         <th>Position</th>
         <th>Office</th>
         <th>Age</th>
         <th>Start date</th>
         <th>Salary</th>
       </tr>
       </thead>
       <tbody>
       <tr>
         <td>Tiger Nixon</td>
         <td>System Architect</td>
         <td>Edinburgh</td>
         <td>61</td>
         <td>2011/04/25</td>
         <td>$320,800</td>
         <td>Tiger Nixon</td>
         <td>System Architect</td>
         <td>Edinburgh</td>
         <td>61</td>
         <td>2011/04/25</td>
         <td>$320,800</td>
         <td>Tiger Nixon</td>
         <td>System Architect</td>
         <td>Edinburgh</td>
         <td>61</td>
         <td>2011/04/25</td>
         <td>$320,800</td>
       </tr>
       </tbody>
     </Table>&ndash;&gt;
  &lt;!&ndash;  <input type="text" placeholder="请输入用户名">
    <input type="text" placeholder="请输入用户ID">
    <input type="text" placeholder="请输入用户编号">
    <Button type="primary" shape="circle" icon="ios-search" size="small" class="btn">搜索</Button>
    <Button type="primary" shape="circle" icon="icon-search" size="small" class="btn-add">
      <Icon type="android-person-add" size="14" class="iuser"></Icon>
      添加新用户
    </Button>
    <i-table border :columns="columns7" :data="data6" id="example" class="display" cellspacing="0" width="100%"></i-table>&ndash;&gt;
    &lt;!&ndash;<i-table highlight-row :columns="columns7" :data="data6" ref="table" :height="tableHeight"></i-table>
    <Page :current="pageNum" :total="pageTotal" :page-size="pageSize" show-elevator show-sizer show-total placement="top" @on-change="handlePage" @on-page-size-change="handlePageSize" class="pages"></Page>&ndash;&gt;


  </div>-->
  <div class="abnormal">
    <div class="stateTop">
      <span class="spanList">异常选项</span>
      <Dropdown class="tabDrop" trigger="click">
        <Button>
          全部
          <Icon type="arrow-down-b"></Icon>
        </Button>
        <DropdownMenu slot="list" class="dropMenu">
          <DropdownItem class="dropItem">全部</DropdownItem>
          <DropdownItem class="dropItem">最近一天</DropdownItem>
          <DropdownItem class="dropItem">最近一周</DropdownItem>
          <DropdownItem class="dropItem">最近一月</DropdownItem>
          <DropdownItem class="dropItem">自定义</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <!--<Button class="btnAll">全部</Button>-->
      <Button>SD卡异常</Button>
      <Button>低电压</Button>
      <Button>以太网故障</Button>
      <Button>无线模块故障</Button>
      <Button>智件信号异常</Button>
      <Button>非定时计划撤/布防</Button>
      <Button>异常离线</Button>
      <Button>自定义</Button>
    </div>
    <div class="tabContent">
      <i-input type="text" placeholder="设备ID" style="width:30%;"></i-input>
      <i-input type="text" placeholder="用户编码" style="width:30%;"></i-input>
      <Button>搜索</Button>
    </div>
    <div class="rigTable ">
      <Table border size="small" :columns="historyColumns" :data="historyData" ref="table" class="stateTable">
      </Table>
      <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changePage"></Page>
    </div>
  </div>


</template>
<script>
  import elementResizeDetectorMaker from 'element-resize-detector'
  let testData = {
    "histories": [
      {
        id: '01',
        name: '设备01',
        userId: '01',
        equipmentState: '不在线',
        clothRemoval: '撤防',
        deviceAddress: '合创01',
        equipmentVersion: 'V800R200000001',
        equipmentModel: 'VG01',
        stateRecords: '',
        operationRecords: '',
        abnormalRecords: ''
      },
      {
        id: 2,
        name: '设备2',
        userId: 2,
        equipmentState: '不在线',
        clothRemoval: '不撤防',
        deviceAddress: '合创2',
        equipmentVersion: 'V800R202',
        equipmentModel: 'VG02',
        stateRecords: '',
        operationRecords: '',
        abnormalRecords: ''
      },
      {
        id: 3,
        name: '设备3',
        userId: 3,
        equipmentState: '不在线',
        clothRemoval: '撤防',
        deviceAddress: '合创3',
        equipmentVersion: 'V800R203',
        equipmentModel: 'VG03',
        stateRecords: '',
        operationRecords: '',
        abnormalRecords: ''
      },
      {
        id: 4,
        name: '设备4',
        userId: 4,
        equipmentState: '在线',
        clothRemoval: '不撤防',
        deviceAddress: '合创4',
        equipmentVersion: 'V800R204',
        equipmentModel: 'VG04',
        stateRecords: '',
        operationRecords: '',
        abnormalRecords: ''
      },
      {
        id: 5,
        name: '设备5',
        userId: 5,
        equipmentState: '在线',
        clothRemoval: '撤防',
        deviceAddress: '合创5',
        equipmentVersion: 'V800R205',
        equipmentModel: 'VG05',
        stateRecords: '',
        operationRecords: '',
        abnormalRecords: ''
      },
      {
        id: 6,
        name: '设备6',
        userId: 6,
        equipmentState: '不在线',
        clothRemoval: '不撤防',
        deviceAddress: '合创6',
        equipmentVersion: 'V800R206',
        equipmentModel: 'VG06',
        stateRecords: '',
        operationRecords: '',
        abnormalRecords: ''
      },
      {
        id: 7,
        name: '设备7',
        userId: 7,
        equipmentState: '不在线',
        clothRemoval: '撤防',
        deviceAddress: '合创7',
        equipmentVersion: 'V800R207',
        equipmentModel: 'VG07',
        stateRecords: '',
        operationRecords: '',
        abnormalRecords: ''
      },
      {
        id: 8,
        name: '设备8',
        userId: 8,
        equipmentState: '不在线',
        clothRemoval: '撤防',
        deviceAddress: '合创8',
        equipmentVersion: 'V800R208',
        equipmentModel: 'VG08',
        stateRecords: '',
        operationRecords: '',
        abnormalRecords: ''
      },
      {
        id: 9,
        name: '设备9',
        userId: 9,
        equipmentState: '不在线',
        clothRemoval: '撤防',
        deviceAddress: '合创9',
        equipmentVersion: 'V800R209',
        equipmentModel: 'VG09',
        stateRecords: '',
        operationRecords: '',
        abnormalRecords: ''
      },
      {
        id: 10,
        name: '设备10',
        userId: 10,
        equipmentState: '不在线',
        clothRemoval: '撤防',
        deviceAddress: '合创10',
        equipmentVersion: 'V800R2010',
        equipmentModel: 'VG010',
        stateRecords: '',
        operationRecords: '',
        abnormalRecords: ''
      },
      {
        id: 11,
        name: '设备11',
        userId: 11,
        equipmentState: '在线',
        clothRemoval: '撤防',
        deviceAddress: '合创11',
        equipmentVersion: 'V800R2011',
        equipmentModel: 'VG011',
        stateRecords: '',
        operationRecords: '',
        abnormalRecords: ''
      },
      {
        id: 12,
        name: '设备12',
        userId: 12,
        equipmentState: '在线',
        clothRemoval: '撤防',
        deviceAddress: '合创12',
        equipmentVersion: 'V800R2012',
        equipmentModel: 'VG012',
        stateRecords: '',
        operationRecords: '',
        abnormalRecords: ''
      },
    ]
  }
  export default {
    name: 'abnormal',
    data () {
      return {
//        isCollapsed: false,
        ajaxHistoryData: [],
        dataCount: 0, // 初始化信息总条数
        pageSize: 5,// 每页显示多少条
        historyColumns: [
          {
            title: '设备ID',
            key: 'id',
            sortable: true,
//            width: '100%',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('span', {
                  style: {
                    display: 'inline-block',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  },
                  domProps: {
                    title: params.row.id
                  }
                }, params.row.id)
              ])
            },
          },
          {
            title: '设备名',
            key: 'name',
            sortable: true,
//            width: '100%',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('span', {
                  style: {
                    display: 'inline-block',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  },
                  domProps: {
                    title: params.row.name
                  }
                }, params.row.name)
              ])
            },
          },
          {
            title: '用户ID',
            key: 'userId',
            sortable: true,
//            width: '100%',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('span', {
                  style: {
                    display: 'inline-block',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  },
                  domProps: {
                    title: params.row.userId
                  }
                }, params.row.userId)
              ])
            }
          },
          {
            title: '设备状态',
            key: 'equipmentState',
            sortable: true,
//            width: '100%',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('span', {
                  style: {
                    display: 'inline-block',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  },
                  domProps: {
                    title: params.row.equipmentState
                  }
                }, params.row.equipmentState)
              ])
            },
          },
          {
            title: '布撤防',
            key: 'clothRemoval',
            sortable: true,
//            width: '100%',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('span', {
                  style: {
                    display: 'inline-block',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  },
                  domProps: {
                    title: params.row.clothRemoval
                  }
                }, params.row.clothRemoval)
              ])
            }
          },
          {
            title: '设备地址',
            key: 'deviceAddress',
            sortable: true,
//            width: '100%',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('span', {
                  style: {
                    display: 'inline-block',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  },
                  domProps: {
                    title: params.row.deviceAddress
                  }
                }, params.row.deviceAddress)
              ])
            }
          },
          {
            title: '设备版本',
            key: 'equipmentVersion',
            sortable: true,
            align: 'center',
//            width: '100%',
            render: (h, params) => {
              return h('div', [
                h('span', {
                  style: {
                    display: 'inline-block',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  },
                  domProps: {
                    title: params.row.equipmentVersion
                  }
                }, params.row.equipmentVersion)
              ])
            }
          },
          {
            title: '设备型号',
            key: 'equipmentModel',
            sortable: true,
//            width: '100%',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('span', {
                  style: {
                    display: 'inline-block',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  },
                  domProps: {
                    title: params.row.equipmentModel
                  }
                }, params.row.equipmentModel)
              ])
            }
          },
          {
            title: '状态记录',
            key: 'stateRecords',
            sortable: true,
//            width: '100%',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('span', {
                  style: {
                    display: 'inline-block',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  },
                  domProps: {
                    title: params.row.stateRecords
                  }
                }, params.row.stateRecords),
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  },
                  style: {
                    color: '#5cadff',
                    textAlign: 'center',
                    display: 'inline-block',
                    marginTop: '-10px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '状态记录')
              ])
            }
          },
          {
            title: '操作记录',
            key: 'operationRecords',
            sortable: true,
//            width: '100%',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('span', {
                  style: {
                    display: 'inline-block',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  },
                  domProps: {
                    title: params.row.operationRecords
                  }
                }, params.row.operationRecords),
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  },
                  style: {
                    color: '#5cadff',
                    textAlign: 'center',
                    display: 'inline-block',
                    marginTop: '-10px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '操作记录')
              ])
            }
          },
          {
            title: '异常记录',
            key: 'abnormalRecords',
            sortable: true,
//            width: '100%',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('span', {
                  style: {
                    display: 'inline-block',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  },
                  domProps: {
                    title: params.row.abnormalRecords
                  }
                }, params.row.abnormalRecords),
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  },
                  style: {
                    color: '#5cadff',
                    textAlign: 'center',
                    display: 'inline-block',
                    marginTop: '-10px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '异常记录')
              ])
            }
          },
        ],
        historyData: [],
      }
    },

    methods: {
      // 获取历史记录信息
      handleListApproveHistory(){
        // 保存取到的所有数据
        this.ajaxHistoryData = testData.histories
        this.dataCount = testData.histories.length;
        // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
        if (testData.histories.length < this.pageSize) {
          this.historyData = this.ajaxHistoryData;
        } else {
          this.historyData = this.ajaxHistoryData.slice(0, this.pageSize);
        }
      },
      changePage(index){
        var _start = (index - 1) * this.pageSize;
        var _end = index * this.pageSize;
        this.historyData = this.ajaxHistoryData.slice(_start, _end)
      },

      show(index){
        this.$Modal.info({
          title: '状态记录',
          content: `name: ${this.historyData[index].name} <br> equipmentState: ${this.historyData[index].equipmentState} `
        })
      },
    },

    created(){
      this.handleListApproveHistory();
    }
  }
</script>
<style scoped lang="less">
  .abnormal {
    width: 90%;
    background: #051b30;
    margin: auto;
    color: #f3fffb;
    .stateTop {
      padding: 12px 12px 12px 0;
      font-size: 16px;
      .tabDrop {
        button {
          background: #1a7e8d;
          color: #f3fffb;
        }
      }
      .spanList {
        display: inline-block;
        margin: 0 10px;
        font-weight: bold;
      }
      button {
        color: #f3fffb;
        background: #051b30;
      }

    }
    .tabContent {
      padding: 10px 10px 10px 0;
      input {
        color: blue;
      }
      button {
        color: #f3fffb;
        background: #1a7e8d;

      }
    }
    .rigTable {
      clear: both;
      line-height: 12px;
      .stateTable {
        margin-top: 20px;
        font-size: 10px;
      }
      .paging {
        float: right;
        margin-top: 10px;
      }
    }
  }


</style>

<!--<script>
//  import iTable from '../views/Table'
  export default{
    name:'abnormal',
    components:{
//      iTable
    },

  }
</script>
<style scoped>

  .abnormal{
    background-color:#051b30;
    width: 100%;
    height: 100%;
    font-size: 14px;
    /*text-align: center;*/
    color: #f3fffb;
  }
</style>-->

