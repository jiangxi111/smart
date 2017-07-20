<template>
	<div>

		<el-row >
		  <el-col :md="2">选择日期</el-col>
		  <el-col :md="7">
		  	<el-date-picker
		      v-model="value3"
		      type="datetimerange"
		      placeholder="选择时间范围">
		    </el-date-picker>
		  </el-col>
		  <el-col :md="10">
		  	<el-select v-model="value" placeholder="任务进度">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>
			  <el-button type="info">确定查询</el-button>
			  <el-button type="info">重置</el-button>
		  </el-col>
		  <el-col :md="5"><el-input
			  placeholder="任务名称"
			  icon="search"
			  v-model="input2"
			  >
			</el-input></el-col>
		</el-row>
		<el-row style="margin-top:40px;">
			<el-col :md="24">
				<el-table
    :data="tableData"
    border
     :max-height="530|getHeightBody"
     :default-sort = "{prop: 'date', order: 'descending'}"
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      sortable
     >
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      >
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      sortable
     >
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      sortable
     >
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip
      >
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      >
      <template scope="scope">
        {{scope.row.zip | tianjia}}
      </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200"
     >
      <template scope="scope">
        <el-button type="success" size="small">编辑</el-button>
        <el-button type="danger" size="small">删除</el-button>
         <el-button
          size="small"
          >查看</el-button>
      </template>
    </el-table-column>
  </el-table>
			</el-col>
		</el-row>
    <div class="pageCon">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
	</div>
</template>

<script>
  export default {
    mounted(){
    },
  	methods:{
  		handleClick() {
        console.log(1);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  	},
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
      	 tableData: [{
          date: '2016-05-03',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }
        , {
          date: '2016-05-01',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }
        , {
          date: '2016-05-01',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }
        , {
          date: '2016-05-01',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }
        , {
          date: '2016-05-01',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }
        , {
          date: '2016-05-01',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }
        , {
          date: '2016-05-01',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }
        , {
          date: '2016-05-01',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }
        , {
          date: '2016-05-01',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }
        , {
          date: '2016-05-01',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }
        , {
          date: '2016-05-01',
          name: '姜西姜西姜西姜西姜西',
          province: '上海',
          city: '普陀区',
          address: '普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区普陀区 1518 弄',
          zip: 200333
        }],
      	 input2: '',
      	options: [{
          value: '选项1',
          label: '报名中'
        }, {
          value: '选项2',
          label: '进行中'
        }, {
          value: '选项3',
          label: '报名中'
        }, {
          value: '选项4',
          label: '报名中'
        }, {
          value: '选项5',
          label: '进行中'
        }],
        value: '',
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value4: ''
      };
    }
  };
</script>
<style scoped>
  .pageCon{
    float: right;
    margin-top: 20px;
  }
</style>
