<template>
  <div class="app-container">
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedItems" @change="handleCheckedItemsChange">
        <el-checkbox v-for="item in items" :label="item.id" :key="item.id">{{item.roleName}}</el-checkbox>
    </el-checkbox-group>
    </br>
    <el-button :disabled="saveBtnDisabled" type="primary" @click="update">保存</el-button>

  </div>
</template>

<script>

import userApi from '@/api/acl/user'

//const cityOptions = ['上海', '北京', '广州', '深圳'];

export default {
  data() {
      return {
        checkAll: false,
        checkedItems: [], //已选中
        items: [], //所有的
        isIndeterminate: false,
        userId:'',
        saveBtnDisabled: false // 保存按钮是否禁用,
      };
    },
    created () {
      this.init()
    },
    methods: {
      init(){
          if (this.$route.params && this.$route.params.id) {
                this.userId = this.$route.params.id
                this.getById(this.userId)
            }
      },
      getById(userId){
        userApi.getAssign(userId).then(response => {
          var jsonObj = response.data.assignRoles
          this.checkedItems = this.getJsonToList(jsonObj,"id")
          this.items = response.data.allRolesList
          this.isIndeterminate = this.checkedItems.length > 0 && this.checkedItems.length < this.items.length;
          this.checkAll = this.checkedItems.length === this.items.length;
        })
      },
      //把json数据转成string再转成对象，根据Key获取value数据
      getJsonToList(json,key){

          //把JSON字符串转成对象
          var list = JSON.parse(JSON.stringify(json));
          //var list = JSON.parse(json)
          var strText = []
          //遍历这个集合对象，获取key的值
          for(var i = 0; i < list.length; i++){
             strText.push(list[i][key])
          }
          return strText;

      },
      handleCheckAllChange(val) {
        //console.log('全选按钮勾选后' + val);
        this.checkedItems = val ? this.getJsonToList(this.items,"id") : [];
        //console.log(this.checkedItems);
        this.isIndeterminate = false;
      },
      handleCheckedItemsChange(value) {

        let checkedCount = value.length;
        this.checkAll = checkedCount === this.items.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.items.length;
      },
      update(){
        this.saveBtnDisabled = true // 防止表单重复提交
        var ids = this.checkedItems.join(",")
        console.log(ids)
        //修改权限
        userApi.saveAssign(this.userId, ids).then(response => {
            if(response.success){
              this.$message({
                type:'success',
                message:'保存成功'
              })
              this.$router.push({ path: '/acl/user/list' })
            }
        })
      }
    }
};
</script>
