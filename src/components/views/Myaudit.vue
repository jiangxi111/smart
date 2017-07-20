<template>
<div>
<el-row>
  <el-col :md="16" :offset="4">
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="积分名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="积分区域">
    <el-select v-model="form.region" placeholder="请选择积分区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="积分时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="是否开启">
    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="积分性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="性质积分" name="type"></el-checkbox>
      <el-checkbox label="性质1" name="type"></el-checkbox>
      <el-checkbox label="性质3" name="type"></el-checkbox>
      <el-checkbox label="性质4" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="资源1"></el-radio>
      <el-radio label="资源2"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="积分形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</el-col>
</el-row>
</div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
      	if(!this.form.name){
      		this.$message.error('名称不得为空');
      		return;
      	}
      	if(!this.form.region){
      		this.$message.error('请选择积分区域');
      		return;
      	}
      }
    }
  }
</script>