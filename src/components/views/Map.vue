<template>
  <div id="container" class="mymap"></div>
</template>

<script>
  import AMap from 'AMap'; //在页面中引入高德地图
  let map;
  export default {
    name: '',
    mounted(){
      this.init();//加载地图和相关组件
    },
    data () {
      return {}
    },
    components: {},
    methods: {
      init () {
        map = new AMap.Map('container', {//'container'是对应页面盒子的id
          center: [116.397428, 39.90923],
          resizeEnable: true,
          zoom: 10//初始视窗
        })

        AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
          map.addControl(new AMap.ToolBar())
          map.addControl(new AMap.Scale())
//          map.addControl(new  AMap.ElasticMarker())
//          'AMap.ElasticMarker'
        })
      }
    }
  }

</script>

<style scoped>
  .mymap{
    width: 100%;
    height: 300px;
    background:#051b30 ;
  }
</style>
