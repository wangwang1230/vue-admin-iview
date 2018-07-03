<template>
  <div class="menu">
    <Row>
      <i-col :xs="{span:24}" :sm="{span:8}" :md="{span:6}">
        <Card style="overflow: auto">
          <h5>编辑导航栏</h5>
          <draggable v-model="menu" :options="{draggable:'.cell',group:'menu'}" @start="drag=true" @end="drag=false">
            <div v-for="(element,index) in menu" class="cell" @click="active($event,element,index)" :key="index"
                 :class="{active:currIndex==index}">{{element.name}}

              <Button type="primary" shape="circle" icon="ios-search" v-if="currIndex==index" class="pull-right"
                      size="small" @click="edit(element)"></Button>
              <draggable v-model="element.children" :move="onMove" :options="{draggable:'.subCell',group:'menu'}"
                         @start="drag=true"
                         @end="drag=false">
                <div class="subCell" v-for="sub in element.children" :fixed="sub.fixed">
                  {{sub.name}}
                </div>
              </draggable>
            </div>
          </draggable>&ndash;&gt;
        </Card>
      </i-col>
      <i-col :xs="{span:24}" :sm="{span:16}" :md="{span:18}">
        <Card>
          <Button type="primary" @click.native="save">保存</Button>

        </Card>
      </i-col>
      <!-- <i-col :xs="{span:24}" :sm="{span:8}" :md="{span:6}">
         <i-table>
           <tr style="height:100%">
             <td>
               <span>01好</span>
             </td>
             <td>你好1</td>
             <td>你好2</td>
             <td>你好3</td>
             <td>你好4</td>
           </tr>
         </i-table>
       </i-col>
       <Card style="max-height: 547px;overflow: auto">
         <Table>
           <tr>
             <td>1111</td>
             <td>1112</td>
             <td>1113</td>
             <td>1114</td>
             <td>1115</td>
           </tr>
         </Table>
       </Card>-->
    </Row>

  </div>
</template>
<script>
  import menu from '@/router/menu'
  import draggable from 'vuedraggable'
  import Cookies from 'js-cookie'
  //  import $ from 'jquery'

  export default {
    components: {
      draggable,

    },
    data () {
      return {
        menu: menu,
        currIndex: 0,
        currItem: {},
        group: 'menu',
        editable: true,
        isDragging: false,
        delayedDragging: false,
      }
    },
    watch: {
      isDragging (newValue) {
        if (newValue) {
          this.delayedDragging = true
          return
        }
        this.$nextTick(() => {
          this.delayedDragging = false
        })
      },
      currItem: {
        handler (val, oval) {
          //
        }
      }
    },
    methods: {
      selectFn () {
      },
      onMove ({relatedContext, draggedContext}) {
        console.log(relatedContext, draggedContext)
        const relatedElement = relatedContext.element
        const draggedElement = draggedContext.element
        return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      },
      save () {
        Cookies.set('menu', this.menu)
      },
      delete () {
        let d = this.menu.map(item => {
          if (item.children.length > 0) {
            return item
          } else {
            return false
          }
        })
        let e = d.filter(item => item)
        console.log('d', d)
        console.log('有子元素的项e', e)

        let f = e.map((item) => {
          let sub = item.children.map(sub => {
            return sub.level === -1 ? false : sub
          })
          console.log('每一项子元素', sub)
          let i = sub.filter(sub => sub)
          console.log('剔除后每一项子元素', i)
          item.children = i
          return item
        })
        console.log('最后的', f)
      },
      active ($event, item, index) {
        this.currIndex = index
        this.currItem = item
//        this.delete()
//        $('.cell').removeClass('active')
//        $($event.currentTarget).addClass('active')
      },
      edit (item) {
        this.delete()
        if (item.children.length > 0) {
          return
        } else {
          item.children.push({
            path: '',
            name: '拖动到此添加为子菜单',
            icon: 'icon-addpeople_fill',
            children: [],
            fixed: true,
            level: -1
          })
        }
      }

    },
    created () {
      if (Cookies.getJSON('menu')) {
        this.menu = Cookies.getJSON('menu')
      }

    }
  }
</script>
<style scoped>
  .cell {
    padding: 8px;
    border-bottom: 1px solid #eee;
    cursor: move;
  }

  .subCell {
    padding: 8px;
    padding-left: 16px;
    background: #eee;
    cursor: move;
    border-bottom: 1px solid #ddd;
  }

  .active {
    background: #f3f3f3;
  }
</style>
