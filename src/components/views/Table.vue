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
  <div class="tab">
    <div class="stateTop">
      <span class="spanList">运维列表</span>
      <Dropdown class="tabDrop" trigger="click">
        <Button>
          全部
          <Icon type="arrow-down-b"></Icon>
        </Button>
        <DropdownMenu slot="list" class="dropMenu">
          <DropdownItem class="dropItem">全部</DropdownItem>
          <DropdownItem class="dropItem">视频主机H8-196V</DropdownItem>
          <DropdownItem class="dropItem">视频主机TH661</DropdownItem>
          <DropdownItem class="dropItem">双网主机DP10</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <!--<Button class="btnAll">全部</Button>-->
      <Button class="online"  >在线</Button>
      <Button class="offline">离线</Button>
    </div>
    <div class="tabContent">
      <i-input type="text" placeholder="设备ID" style="width:30%;"></i-input>
      <i-input type="text" placeholder="用户ID" style="width:30%;"></i-input>
      <Button>搜索</Button>
    </div>
    <div class="rigTable ">
      <Table border size="small" :columns="historyColumns" :data="historyData" ref="table" class="stateTable">
      </Table>
      <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changePage"></Page>
    </div>
    <Modal
      v-model="modalState"
      title="状态记录"
      class="vertical-center-modal">
      <Table border :columns="columns1" :data="data1"></Table>
      <Page :total="dataCount1" :page-size="pageSize1" show-total class="paging" @on-change="changePage1"></Page>
    </Modal>
    <Modal
      v-model="modalState1"
      title="操作记录"
      class="vertical-center-modal">
      <Table border :columns="columns2" :data="data2"></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changePage"></Page>
    </Modal>
    <Modal
      v-model="modalState2"
      title="异常记录"
      class="vertical-center-modal">
      <Table border :columns="columns3" :data="data3"></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changePage"></Page>
    </Modal>
  </div>


</template>
<script>
  import elementResizeDetectorMaker from 'element-resize-detector'
  let testData = {
    "histories": [
      {
        id: '1',
        name: '设备01',
        userId: '01',
        equipmentState:'在线',
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
        equipmentState: '在线',
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
    name: 'tab',
    data () {
      return {
        //模态框
        modalState:false,
        dataCount1: 0,// 初始化信息总条数
        pageSize1: 5,// 每页显示多少条
        ajaxData1:[],
        historyData1:[],
        columns1:[
          {
            title:'设备ID',
            key:'id',
          },
          {
            title:'时间',
            key:'time'
          },
          {
            title:'类型',
            key:'myType'
          },
          {
            title:'状态详情',
            key:'details'
          },
        ],//状态记录
        data1:[
          {
            id:'设备1',
            myType:'内容1',
            time:'2018-07-01',
            details:'正常'
          },
          {
            id:'设备2',
            myType:'内容2',
            time:'2018-07-02',
            details:'不正常'
          },
          {
            id:'设备3',
            myType:'内容3',
            time:'2018-07-03',
            details:'正常'
          },
          {
            id:'设备4',
            myType:'内容4',
            time:'2018-07-04',
            details:'正常'
          },
          {
            id:'设备5',
            myType:'内容5',
            time:'2018-07-05',
            details:'不正常'
          },
          {
            id:'设备6',
            myType:'内容6',
            time:'2018-07-06',
            details:'不正常'
          }
        ],//状态记录
        modalState1:false,
        columns2:[
          {
            title:'设备ID',
            key:'id',
          },
          {
            title:'防区',
            key:'defense'
          },
          {
            title:'操作源',
            key:'operatingSource'
          },
          {
            title:'操作类型',
            key:'operationType'
          },
          {
            title:'操作结果',
            key:'operationResults'
          },
          {
            title:'操作时间',
            key:'operationTime'
          }
        ],//操作记录
        data2:[
          {
            id:'设备1',
            defense:'防区1',
            operatingSource:'设备终端1',
            operationType:'添加传感器',
            operationResults:'成功',
            operationTime:'2018-07-01'
          },
          {
            id:'设备2',
            defense:'防区2',
            operatingSource:'设备终端2',
            operationType:'添加传感器',
            operationResults:'失败',
            operationTime:'2018-07-02'
          },
          {
            id:'设备3',
            defense:'防区3',
            operatingSource:'设备终端3',
            operationType:'添加传感器',
            operationResults:'成功',
            operationTime:'2018-07-03'
          },
          {
            id:'设备4',
            defense:'防区4',
            operatingSource:'设备终端4',
            operationType:'删除传感器',
            operationResults:'成功',
            operationTime:'2018-07-04'
          },
          {
            id:'设5',
            defense:'防区5',
            operatingSource:'设备终端5',
            operationType:'删除传感器',
            operationResults:'失败',
            operationTime:'2018-07-05'
          }
        ],//操作记录
        modalState2:false,
        columns3:[
          {
            title:'设备ID',
            key:'id',
          },
          {
            title:'异常类型',
            key:'exceptionType'
          },
          {
            title:'异常时间',
            key:'exceptionTime'
          },
          {
            title:'异常细节',
            key:'exceptionDetails'
          }

        ],//操作记录
        data3:[
          {
            align:'center',
            id:'设备1',
            exceptionType:'异常离线',
            exceptionTime:'2018-07-01',
            exceptionDetails:''
          },
          {
            align:'center',
            id:'设备2',
            exceptionType:'异常离线',
            exceptionTime:'2018-07-02',
            exceptionDetails:''
          },
          {
            align:'center',
            id:'设备3',
            exceptionType:'异常离线恢复',
            exceptionTime:'2018-07-03',
            exceptionDetails:''
          },
          {
            align:'center',
            id:'设备4',
            exceptionType:'异常离线恢复',
            exceptionTime:'2018-07-04',
            exceptionDetails:''
          },
          {
            align:'center',
            background:'gold',
            id:'设备5',
            exceptionType:'异常离线',
            exceptionTime:'2018-07-05',
            exceptionDetails:''
          }
        ],//操作记录




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
//                    width: '100%',
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
//                    color: '#5cadff',
                    textAlign: 'center',
                    display: 'inline-block',
                    marginTop: '-10px',
                    fontWeight:'bold'
                  },
                  on: {
                    click: () => {
                      this.modalState=true
//                      this.show(params.index)
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
                    textAlign: 'center',
                    display: 'inline-block',
                    marginTop: '-10px',
                    fontWeight:'bold'
                  },
                  on: {
                    click: () => {
                      this.modalState1=true
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
                    textAlign: 'center',
                    display: 'inline-block',
                    marginTop: '-10px',
                    fontWeight:'bold'
                  },
                  on: {
                    click: () => {
                      this.modalState2=true
                    }
                  }
                }, '异常记录')
              ])
            }
          },
        ],
        historyData: []
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
        let _start = (index - 1) * this.pageSize;
        let _end = index * this.pageSize;
        this.historyData = this.ajaxHistoryData.slice(_start, _end)
      },

      // 获取状态的数据
      handleListApproveHistory1(){
        // 保存取到的所有数据
        this.ajaxData1=this.data1;
        this.dataCount1 = this.data1.length;
        // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
        if (this.data1.length < this.pageSize1) {
          this.historyData1 = this.ajaxData1;
        } else {
          this.historyData1 = this.ajaxData1.slice(0, this.pageSize1);
        }
      },
      changePage1(index){
        let _start = (index - 1) * this.pageSize1;
        let _end = index * this.pageSize1;
        this.historyData1 = this.ajaxData1.slice(_start, _end)
      }


      /*show(index){
        this.$Modal.info({
          title: '状态记录',
          content: `name: ${this.historyData[index].name} <br> equipmentState: ${this.historyData[index].equipmentState} `
        })
      },*/
    },

    created(){
      this.handleListApproveHistory();
      this.handleListApproveHistory1();
    }
  }
</script>
<style scoped lang="less">
  .tab {
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
    .vertical-center-modal{
      display: flex;
      align-items: center;
      justify-content: center;
      .ivu-modal{
        top: 0;
      }
    }
  }


</style>
