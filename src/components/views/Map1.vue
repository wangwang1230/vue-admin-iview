<template>
  <div class="mLayout">
    <div id="map-container"></div>
    <div class="mHeader">
      <span>title</span>
    </div>
  </div>
</template>

<script>
  /*eslint-disable no-undef*/
  import AMap from 'AMap'
  import AMapUI from 'AMapUI'
  let mapObj
  let pro
  export default {
    name: '',
    data () {
      return {}
    },
    components:{
      AMap,AMapUI
    },
    mounted() {
      this.init()
    },
    methods: {
      init(){
        mapObj = new AMap.Map('map-container', {
          center: [117.000923, 36.675807],
          zoom: 6
        })
        mapObj.plugin(['AMap.ToolBar', 'AMap.MapType'], function () {
          mapObj.addControl(new AMap.ToolBar())
          mapObj.addControl(new AMap.MapType({showTraffic: false, showRoad: false}))
        })
        mapObj.plugin(['AMap.Geolocation'], function () {
          let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //  是否使用高精度定位，默认:true
            timeout: 10000, //  超过10秒后停止定位，默认：无穷大
            maximumAge: 0, // 定位结果缓存0毫秒，默认：0
            convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true, //  显示定位按钮，默认：true
            buttonPosition: 'LB',  // 定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true, //  定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true, //  定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,  //  定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true  //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          })
          mapObj.addControl(geolocation)
          geolocation.getCurrentPosition()
          AMap.event.addListener(geolocation, 'complete', (result) => {
            mapObj.setCenter(result.position)
          })  //  返回定位信息
          AMap.event.addListener(geolocation, 'error', (result) => {
            console.log(result)
          })  //  返回定位出错信息
        })
      },

      createdMarker(){
        let m = this
        for (let i = 0; i < this.mdata.length; i++) {
          let locatonText = this.mdata[i].locationText
          locatonText = locatonText.substring(locatonText.indexOf('(') + 1, locatonText.indexOf(')'))
          let lanlet = locatonText.split('')
          // 后台取到的点，新建LngLat对象
          let lngLat = new AMap.LngLat(lanlet[0].trim(), lanlet[1].trim())

          // 转高德坐标系
          AMap.convertFrom(lngLat, 'gps', function (info, result) {

            lngLat = result.locations[0]// 转换后的坐标位置
            let marker = new AMap.Marker({
              position: lngLat,
              content:'测试1',
              map: mapObj
            })
            AMap.event.addListener(marker, 'click', (e) => {
              AMapUI.loadUI(['overlay/SimpleInfoWindow'], function (SimpleInfoWindow) {
                let infoWindow = new SimpleInfoWindow({
                  infoTitle: '<strong>这是标题</strong>',
                  infoBody: '<p>这是信息</p>',
                  offset: new AMap.Pixel(0, -20),
                  autoMove: true
                })
                infoWindow.open(mapObj, e.target.getPosition())
                // 最坑的就是这一步了，他的infowindow没有点击事件，所以infoWindow.get$Container()会返回这个infowindow（jquery）对象
                let infoEle = infoWindow.get$Container()
                //给infowindow添加点击事件，并在回调函数中处理业务或者跳转等
                infoEle.on('click', (e) => {
                  router.push({name: 'proinfo', params: pro})
                })
              })
            })
          })
        }
      }
    }
  }
</script>

<style scoped>
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
  }
  #map-container{
    width:100%;
    height:300px;
  }
</style>
