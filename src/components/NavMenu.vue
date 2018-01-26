<template>
  <div>
    <el-row>
    <el-col :span="4">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#232322"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu v-for="menu in menus" :key="menu.index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{menu.name}}</span>
          </template>
          <el-menu-item-group v-for="childMenu in menu.childMenus" :key="childMenu.index">
            <el-menu-item index="1-1">{{childMenu.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          'name': '工作台',
          'path': 'Home',
          'index': '1'
        },
        {
          'name': '菜单一',
          'path': 'RackPoint',
          'index': '2',
          'childMenus': [
            {
              'name': '子菜单一',
              'path': 'Home1',
              'index': '2-1'
            },
            {
              'name': '子菜单二',
              'path': 'Home2',
              'index': '2-2'
            },
            {
              'name': '子菜单三',
              'path': 'Home3',
              'index': '2-3'
            }
          ]
        },
        {
          'name': '赔案',
          'path': 'PayCase',
          'index': '3'
        },
        {
          'name': '账单',
          'path': 'AccountBill',
          'index': '4'
        },
        {
          'name': '结算',
          'path': 'AccountSettlement',
          'index': '5'
        },
        {
          'name': '发票',
          'path': 'Invoice',
          'index': '6'
        },
        {
          'name': '统计',
          'path': 'Statistics',
          'index': '7'
        },
        {
          'name': '客户',
          'path': 'Client',
          'index': '8'
        },
        {
          'name': '影像',
          'path': 'Shadow',
          'index': '9'
        }
      ],
      nowIndex: '0'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
