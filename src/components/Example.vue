<template>
	<div id="example">
		<!-- Color 色彩 -->
		<div class="example-item">
			<h3>#Color 色彩<h4>为搭建的产品提供一致的外观视觉感受。</h4></h3>
			<div class="block">
				<h4>主要颜色是鲜艳、友好的蓝色。</h4>
				<el-row :gutter="20">
				  <el-col :span="8"><div class="grid-content color-item color-lightBlue">
				  	Light Blue<div class="value">#58B7FF</div>
				  </div></el-col>
				  <el-col :span="8"><div class="grid-content color-item color-blue">
				  	Blue<div class="value">#20A0FF</div>
				  </div></el-col>
				  <el-col :span="8"><div class="grid-content color-item color-darkBlue">
				  	Dark Blue<div class="value">#1D8CE0</div>
				  </div></el-col>
				</el-row>
			</div>
			<div class="block">
				<h4>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</h4>
				<el-row :gutter="20">
				  <el-col :span="6"><div class="grid-content color-item" style="background: #20A0FF;">
				  	Blue<div class="value">#20A0FF</div>
				  </div></el-col>
				  <el-col :span="6"><div class="grid-content color-item" style="background: #13CE66;">
				  	Success<div class="value">#13CE66</div>
				  </div></el-col>
				  <el-col :span="6"><div class="grid-content color-item" style="background: #F7BA2A;">
				  	Warning<div class="value">#F7BA2A</div>
				  </div></el-col>
				  <el-col :span="6"><div class="grid-content color-item" style="background: #FF4949;">
				  	Danger<div class="value">#FF4949</div>
				  </div></el-col>
				</el-row>
			</div>
			<div class="block">
				<h4>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</h4>
				<el-row :gutter="20">
				  <el-col :span="6"><div class="grid-content color-item" style="background: #1F2D3D;">
				  	Black<div class="value">#1F2D3D</div>
				  </div></el-col>
				  <el-col :span="6"><div class="grid-content color-item" style="background: #8492A6;">
				  	Silver<div class="value">#8492A6</div>
				  </div></el-col>
				  <el-col :span="6"><div class="grid-content color-item" style="background: #D3DCE6;">
				  	Gray<div class="value">#D3DCE6</div>
				  </div></el-col>
				  <el-col :span="6"><div class="grid-content color-item" style="background: #F9FAFC;">
				  	Dark White<div class="value">#F9FAFC</div>
				  </div></el-col>
				   <el-col :span="6"><div class="grid-content color-item" style="background: #324057;">
				  	Light Black<div class="value">#324057</div>
				  </div></el-col>
				   <el-col :span="6"><div class="grid-content color-item" style="background: #99A9BF;">
				  	Light Silver<div class="value">#99A9BF</div>
				  </div></el-col>
				   <el-col :span="6"><div class="grid-content color-item" style="background: #E5E9F2;">
				  	Light Gray<div class="value">#E5E9F2</div>
				  </div></el-col>
				   <el-col :span="6"><div class="grid-content color-item" style="background: #FFFFFF;">
				  	White<div class="value">#FFFFFF</div>
				  </div></el-col>
				   <el-col :span="6"><div class="grid-content color-item" style="background: #475669;">
				  	Extra Light Black<div class="value">#475669</div>
				  </div></el-col>
				   <el-col :span="6"><div class="grid-content color-item" style="background: #C0CCDA;">
				  	Extra Light Silver<div class="value">#C0CCDA</div>
				  </div></el-col>
				   <el-col :span="6"><div class="grid-content color-item" style="background: #EFF2F7;">
				  	Extra Light Gray<div class="value">#EFF2F7</div>
				  </div></el-col>
				</el-row>
			</div>
		</div>
		<!-- Layout 布局 -->
		<div class="example-item">
			<h3>#Layout 布局<h4>通过基础的 24 分栏，迅速简便地创建布局。</h4></h3>
			<div class="block">
				<h4>使用单一分栏创建基础的栅格布局。</h4>
				<el-row>
				  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
				</el-row>
				<el-row>
				  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
				</el-row>
				<el-row>
				  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
				  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
				</el-row>
				<el-row>
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
				</el-row>
				<el-row>
				  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
				</el-row>
			</div>
			<div class="block">
				<h4>分栏之间存在间隔。</h4>
				<el-row :gutter="20">
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				</el-row>
			</div>
			<div class="block">
				<h4>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局</h4>
				<el-row :gutter="20">
				  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
				</el-row>
				<el-row :gutter="20">
				  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
				</el-row>
				<el-row :gutter="20">
				  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
				</el-row>
			</div>
			<div class="block">
				<h4>支持偏移指定的栏数。</h4>
				<el-row :gutter="20">
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
				</el-row>
				<el-row :gutter="20">
				  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
				</el-row>
				<el-row :gutter="20">
				  <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
				</el-row>
			</div>
			<div class="block">
				<h4>通过 flex 布局来对分栏进行灵活的对齐。</h4>
				<el-row type="flex" class="row-bg">
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				</el-row>
				<el-row type="flex" class="row-bg" justify="center">
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				</el-row>
				<el-row type="flex" class="row-bg" justify="end">
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				</el-row>
				<el-row type="flex" class="row-bg" justify="space-between">
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				</el-row>
				<el-row type="flex" class="row-bg" justify="space-around">
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				</el-row>
			</div>
			<div class="block">
				<h4>参照了 Bootstrap 的 响应式设计，预设了四个响应尺寸：xs、sm、md和lg。</h4>
				<el-row :gutter="10">
				  <el-col :xs="8" :sm="6" :md="4" :lg="3">
				  	<div class="grid-content bg-purple"></div>
				  </el-col>
				  <el-col :xs="4" :sm="6" :md="8" :lg="9">
				  	<div class="grid-content bg-purple-light"></div>
				  </el-col>
				  <el-col :xs="4" :sm="6" :md="8" :lg="9">
				  	<div class="grid-content bg-purple"></div>
				  </el-col>
				  <el-col :xs="8" :sm="6" :md="4" :lg="3">
				  	<div class="grid-content bg-purple-light"></div>
				  </el-col>
				</el-row>
			</div>
		</div>
		<!-- 输入框 -->
		<div class="example-item">
			<h3>#Input/Textarea输入框</h3>
			<div class="block">
				<h4>input输入框</h4>
				<el-input v-model="input" placeholder="请输入内容"></el-input>
				<div style="margin: 20px 0;"></div>
				<el-input placeholder="请输入内容" v-model="input1" :disabled="true"></el-input>
				<div style="margin: 20px 0;"></div>
				<el-input placeholder="请选择日期" icon="search" v-model="input2" </el-input>
			</div>
			<div class="block">
				<h4>textarea文本域</h4>
				<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
				<div style="margin: 20px 0;"></div>
				<el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea2"></el-input>
				<div style="margin: 20px 0;"></div>
				<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea3"></el-input>
			</div>
			<div class="block">
				<h4>input的几种尺寸</h4>
				<div class="demo-input-size">
				  	<el-input size="large" placeholder="请输入内容" v-model="input6"></el-input>
					<div style="margin: 20px 0;"></div>
				  	<el-input placeholder="请输入内容" v-model="input7"></el-input>
					<div style="margin: 20px 0;"></div>
				  	<el-input size="small" placeholder="请输入内容" v-model="input8"> </el-input>
					<div style="margin: 20px 0;"></div>
				  	<el-input size="mini" placeholder="请输入内容" v-model="input9"></el-input>
				</div>
			</div>
			<div class="block">
				<h4>输入框的一些搭配使用</h4>
				<div>
				  	<el-input placeholder="请输入内容" v-model="input3">
				    	<template slot="prepend">Http://</template>
				  	</el-input>
				</div>
				<div style="margin-top: 15px;">
				  	<el-input placeholder="请输入内容" v-model="input4">
				    	<template slot="append">.com</template>
				  	</el-input>
				</div>
				<div style="margin-top: 15px;">
				  	<el-input placeholder="请输入内容" v-model="input5">
					    <el-select v-model="select" slot="prepend" placeholder="请选择">
					      	<el-option label="餐厅名" value="1"></el-option>
					      	<el-option label="订单号" value="2"></el-option>
					      	<el-option label="用户电话" value="3"></el-option>
					    </el-select>
					    <el-button slot="append" icon="search"></el-button>
				  	</el-input>
				</div>
			</div>
			<div class="block">
				<el-row class="demo-autocomplete">
				  	<el-col :span="12">
				    	<div class="sub-title">激活即列出输入建议</div>
				    	<el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect" >
				    	</el-autocomplete>
				  	</el-col>
				  	<el-col :span="12">
				    	<div class="sub-title">输入后匹配输入建议</div>
				    	<el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect">
				    	</el-autocomplete>
				    </el-col>
    			</el-row>
			</div>
			<div class="block">
				<div class="sub-title">从服务端搜索数据</div>
				<el-autocomplete v-model="state4" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect" ></el-autocomplete>
			</div>
		</div>
		<!-- 按钮 -->
		<div class="example-item btn-box">
			<h3>#Button 按钮</h3>
			<div class="block">
	  			<span class="wrapper">
		    		<el-button type="success">成功按钮</el-button>
		    		<el-button type="warning">警告按钮</el-button>
				    <el-button type="danger">危险按钮</el-button>
				    <el-button type="info">信息按钮</el-button>
				 </span>
			</div>
			<div class="block">
			  	<span class="wrapper">
				    <el-button :plain="true" type="success">成功按钮</el-button>
				    <el-button :plain="true" type="warning">警告按钮</el-button>
				    <el-button :plain="true" type="danger">危险按钮</el-button>
				    <el-button :plain="true" type="info">信息按钮</el-button>
		  		</span>
			</div>
			<div class="block">
				<div class="btn-list">
					<el-button type="primary" icon="edit"></el-button>
					<el-button type="primary" icon="share"></el-button>
					<el-button type="primary" icon="delete"></el-button>
					<el-button type="primary" icon="edit">编辑</el-button>
					<el-button type="primary" icon="delete">删除</el-button>
					<el-button type="primary" icon="search">搜索</el-button>
					<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
				</div>
			</div>
		</div>
		<!-- 单选 -->
		<div class="example-item">
			<h3>#Radio 单选框</h3>
			<div class="block">
				<el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
	  			<el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
			</div>
			<div class="block">
				<el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
  				<el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
			</div>
			<div class="block">
				<el-radio-group v-model="radio3">
				    <el-radio-button label="上海"></el-radio-button>
				    <el-radio-button label="北京"></el-radio-button>
				    <el-radio-button label="广州"></el-radio-button>
				    <el-radio-button label="深圳"></el-radio-button>
				</el-radio-group>
				<div style="margin: 15px 0;"></div>
				<el-radio-group v-model="radio4">
				    <el-radio-button label="上海"></el-radio-button>
				    <el-radio-button label="北京" :disabled="true"></el-radio-button>
				    <el-radio-button label="广州"></el-radio-button>
				    <el-radio-button label="深圳"></el-radio-button>
				</el-radio-group>
				<div style="margin: 15px 0;"></div>
				<el-radio-group v-model="radio5" :disabled="true">
				    <el-radio-button label="上海"></el-radio-button>
				    <el-radio-button label="北京"></el-radio-button>
				    <el-radio-button label="广州"></el-radio-button>
				    <el-radio-button label="深圳"></el-radio-button>
				</el-radio-group>
			</div>
		</div>
		<!-- 多选 -->
		<div class="example-item">
			<div class="block">
				<el-checkbox-group v-model="checkList">
				    <el-checkbox label="复选框 A"></el-checkbox>
				    <el-checkbox label="复选框 B"></el-checkbox>
				    <el-checkbox label="复选框 C"></el-checkbox>
				    <el-checkbox label="禁用" disabled></el-checkbox>
				    <el-checkbox label="选中且禁用" disabled></el-checkbox>
				</el-checkbox-group>
			</div>
			<div class="block">
				<div style="margin: 15px 0;"></div>
				<el-checkbox-group v-model="checkboxGroup1">
				    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
				</el-checkbox-group>
				<div style="margin: 15px 0;"></div>
				<el-checkbox-group v-model="checkboxGroup2" size="small">
				    <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '深圳'" :key="city">{{city}}</el-checkbox-button>
				</el-checkbox-group>
				<div style="margin: 15px 0;"></div>
				<el-checkbox-group v-model="checkboxGroup3" size="large" fill="#324057" text-color="#a4aebd" :min="1" :max="3">
				    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
				</el-checkbox-group>
			</div>
		</div>
		<!-- 表单/验证 -->
		<div class="example-item">
			<h3>#表单/验证</h3>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			  	<el-form-item label="活动名称" prop="name">
			    	<el-input v-model="ruleForm.name"></el-input>
			  	</el-form-item>
			  <el-form-item label="活动区域" prop="region">
			    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="活动时间" required>
			    <el-col :span="11">
			      <el-form-item prop="date1">
			        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
			      </el-form-item>
			    </el-col>
			    <el-col class="line" :span="2">-</el-col>
			    <el-col :span="11">
			      <el-form-item prop="date2">
			        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
			      </el-form-item>
			    </el-col>
			  </el-form-item>
			  <el-form-item label="即时配送" prop="delivery">
			    <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
			  </el-form-item>
			  <el-form-item label="活动性质" prop="type">
			    <el-checkbox-group v-model="ruleForm.type">
			      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
			      <el-checkbox label="地推活动" name="type"></el-checkbox>
			      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
			      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
			    </el-checkbox-group>
			  </el-form-item>
			  <el-form-item label="特殊资源" prop="resource">
			    <el-radio-group v-model="ruleForm.resource">
			      <el-radio label="线上品牌商赞助"></el-radio>
			      <el-radio label="线下场地免费"></el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <el-form-item label="活动形式" prop="desc">
			    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
			    <el-button @click="resetForm('ruleForm')">重置</el-button>
			  </el-form-item>
			</el-form>
		</div>
		<!-- 数据表格 -->
		<div class="example-item">
			<h3>#数据表格</h3>
			<el-table :data="tableData" stripe style="width: 100%">
	    		<el-table-column prop="date" label="日期" width="180">
	   	 		</el-table-column>
			    <el-table-column prop="name" label="姓名" width="180">
			    </el-table-column>
			    <el-table-column prop="address" label="地址">
	    		</el-table-column>
	  		</el-table>
		</div>
		<!-- Icon图标 -->
		<div class="example-item">
			<h3>#Icon 图标</h3>
			<ul class="icon-list">
				<li>
					<span>
						<i class="el-icon-arrow-down"></i>
				      	el-icon-arrow-down
				    </span>
			    </li>
			    <li>
				    <span>
					    <i class="el-icon-arrow-left"></i>
					    el-icon-arrow-left
				    </span>
			    </li>
			    <li>
				    <span>
					    <i class="el-icon-arrow-right"></i>
					    el-icon-arrow-right
				    </span>
			    </li>
			    <li>
				    <span>
					    <i class="el-icon-arrow-up"></i>
					    el-icon-arrow-up
				    </span>
			    </li>
			    <li>
				    <span>
					    <i class="el-icon-caret-bottom"></i>
					    el-icon-caret-bottom
				    </span>
			    </li>
			    <li>
				    <span>
				    	<i class="el-icon-caret-left"></i>
				      	el-icon-caret-left
				    </span>
			    </li>
			    <li>
				    <span>
				    	<i class="el-icon-caret-right"></i>
				      	el-icon-caret-right
				    </span>
			    </li>
			    <li>
				    <span>
				    	<i class="el-icon-caret-top"></i>
				      	el-icon-caret-top
				    </span>
			    </li>
			    <li>
				    <span>
				    	<i class="el-icon-check"></i>
				      	el-icon-check
				    </span>
			    </li>
			    <li>
				    <span>
				    	<i class="el-icon-circle-check"></i>
				      	el-icon-circle-check
				    </span>
			    </li>
			    <li>
				    <span>
				    	<i class="el-icon-circle-close"></i>
				      	el-icon-circle-close
				    </span>
			    </li>
			    <li>
				    <span>
				    	<i class="el-icon-circle-cross"></i>
				      	el-icon-circle-cross
				    </span>
			    </li>
			    <li>
				    <span>
				    	<i class="el-icon-close"></i>
				      	el-icon-close
				    </span>
			    </li>
			    <li>
				    <span>
				    	<i class="el-icon-upload"></i>
				      	el-icon-upload
				    </span>
			    </li>
			    <li>
				    <span>
				    	<i class="el-icon-d-arrow-left"></i>
				      	el-icon-d-arrow-left
				    </span>
			    </li>
			    <li>
				    <span>
				    	<i class="el-icon-d-arrow-right"></i>
				      	el-icon-d-arrow-right
				    </span>
			    </li>
			    <li>
				    <span>
				    	<i class="el-icon-d-caret"></i>
				      	el-icon-d-caret
				    </span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-date"></i>
			      		el-icon-date
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-delete"></i>
			      		el-icon-delete
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-document"></i>
			      		el-icon-document
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-edit"></i>
			      		el-icon-edit
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-information"></i>
			      		el-icon-information
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-loading"></i>
			      		el-icon-loading
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-menu"></i>
			      		el-icon-menu
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-message"></i>
			      		el-icon-message
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-minus"></i>
			      		el-icon-minus
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-more"></i>
			      		el-icon-more
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-picture"></i>
			      		el-icon-picture
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-plus"></i>
			      		el-icon-plus
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-search"></i>
			      		el-icon-search
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-setting"></i>
			      		el-icon-setting
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-share"></i>
			      		el-icon-share
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-star-off"></i>
			      		el-icon-star-off
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-star-on"></i>
			      		el-icon-star-on
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-time"></i>
			      		el-icon-time
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-warning"></i>
			      		el-icon-warning
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-delete2"></i>
			      		el-icon-delete2
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-upload2"></i>
			      		el-icon-upload2
			    	</span>
			    </li>
			    <li>
			    	<span>
			    		<i class="el-icon-view"></i>
			      		el-icon-view
			    	</span>
			    </li>
		    </ul>
		</div>
	</div>
</template>
<style type="text/css" scoped>
	#example{
		background-color: #fff;
	}
	.example-item{
		margin: 20px 0;
	}
	.example-item h3{
		margin: 20px 0;
	    padding: 20px 0;
	    color: #1abb9c;
	    border-bottom: 1px solid;
	}
	.block {
	    padding: 30px 24px;
	    overflow: hidden;
	    border-bottom: 1px solid #eff2f6;
	    background-color: #fff;
	    max-width: 800px;
	}
	#example form{
		border: 1px solid #eee;
		padding: 40px 30px 0 30px;
		background-color: #fff;
    	border-radius: 4px;
    	max-width: 800px;
	}
  	.el-select{
    	width: 100%;
  	}
  	.line{
  		text-align: center;
  	}
	.el-checkbox,.el-radio{
		margin-right: 15px;
	}
	.el-checkbox+.el-checkbox,.el-radio+.el-radio{
		margin-left: 0px !important;
	}

	/* ---- 颜色 ---- */
	.color-item{
		margin: 10px 0;
	    padding: 20px;
		color: #fff;
		text-shadow: 0px 0px 5px #000;
	}
	.color-lightBlue {
	    background: #58B7FF;
	}
	.color-blue{
	    background: #20A0FF;
	}
	.color-darkBlue{
		background: #1D8CE0;
	}
	/* ---- 颜色 ---- */

	/* ---- 布局 ---- */
	.el-row {
    	margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	}
	.el-col {
	    border-radius: 4px;
	}
	.bg-purple-dark {
	    background: #99a9bf;
	}
	.block .bg-purple {
	    background: #d3dce6 !important;
	    border-color: #d3dce6 !important;
	}
	.bg-purple-light {
	    background: #e5e9f2;
	}
	.grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	}
	.row-bg {
	    padding: 10px 0;
	    background-color: #f9fafc;
	}
	/* ---- 布局 ---- */


	/* ---- 图标 ---- */
	.icon-list{
		overflow: hidden;
	    list-style: none;
	    padding: 0;
	    border: 1px solid #eaeefb;
	    border-radius: 4px;
	    background-color: #fff;
	}
	.icon-list li {
	    float: left;
	    width: 16.66%;
	    text-align: center;
	    height: 120px;
	    line-height: 120px;
	    color: #666;
	    font-size: 13px;
	    transition: color .15s linear;
	    border-right: 1px solid #eee;
	    border-bottom: 1px solid #eee;
	    margin-right: 0px;
	    margin-bottom: -1px;
	}
	.icon-list li span {
	    line-height: normal;
	    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
	    color: #99a9bf;
	}
	.icon-list li i {
	    display: block;
	    font-size: 24px;
	    margin-bottom: 15px;
	    color: #8492a6;
	}
	.icon-list li:after, .icon-list li span {
	    display: inline-block;
	    vertical-align: middle;
	}
	/* ---- 图标 ---- */

	.el-select .el-input {
	    width: 110px;
	}
	.sub-title {
	    margin-bottom: 10px;
	    font-size: 14px;
	    color: #8492a6;
	}
</style>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳']
  export default {
    data () {
      return {
        input: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        restaurants: [],
        state4: '',
        timeout: null,
        state1: '',
        state2: '',
        select: '',
        textarea: '',
        textarea2: '',
        textarea3: '',
        radio: '1',
        radio1: '',
        radio3: '上海',
        radio4: '上海',
        radio5: '上海',
        checkList: ['选中且禁用', '复选框 A'],
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['北京'],
        checkboxGroup3: ['广州'],
        cities: cityOptions,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      querySearch (queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
        // 调用 callback 返回建议列表的数据
        cb(results)
      },
      createFilter (queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0)
        }
      },
      querySearchAsync (queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          cb(results)
        }, 3000 * Math.random())
      },
      createStateFilter (queryString) {
        return (state) => {
          return (state.value.indexOf(queryString.toLowerCase()) === 0)
        }
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
          { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
          { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' },
          { 'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
          { 'value': '贡茶', 'address': '上海市长宁区金钟路633号' },
          { 'value': '豪大大香鸡排超级奶爸', 'address': '上海市嘉定区曹安公路曹安路1685号' },
          { 'value': '茶芝兰（奶茶，手抓饼）', 'address': '上海市普陀区同普路1435号' },
          { 'value': '十二泷町', 'address': '上海市北翟路1444弄81号B幢-107' },
          { 'value': '星移浓缩咖啡', 'address': '上海市嘉定区新郁路817号' },
          { 'value': '阿姨奶茶/豪大大', 'address': '嘉定区曹安路1611号' },
          { 'value': '新麦甜四季甜品炸鸡', 'address': '嘉定区曹安公路2383弄55号' },
          { 'value': 'Monica摩托主题咖啡店', 'address': '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F' },
          { 'value': '浮生若茶（凌空soho店）', 'address': '上海长宁区金钟路968号9号楼地下一层' },
          { 'value': 'NONO JUICE  鲜榨果汁', 'address': '上海市长宁区天山西路119号' },
          { 'value': 'CoCo都可(北新泾店）', 'address': '上海市长宁区仙霞西路' },
          { 'value': '快乐柠檬（神州智慧店）', 'address': '上海市长宁区天山西路567号1层R117号店铺' },
          { 'value': 'Merci Paul cafe', 'address': '上海市普陀区光复西路丹巴路28弄6号楼819' },
          { 'value': '猫山王（西郊百联店）', 'address': '上海市长宁区仙霞西路88号第一层G05-F01-1-306' },
          { 'value': '枪会山', 'address': '上海市普陀区棕榈路' },
          { 'value': '纵食', 'address': '元丰天山花园(东门) 双流路267号' },
          { 'value': '钱记', 'address': '上海市长宁区天山西路' },
          { 'value': '壹杯加', 'address': '上海市长宁区通协路' },
          { 'value': '唦哇嘀咖', 'address': '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元' },
          { 'value': '爱茜茜里(西郊百联)', 'address': '长宁区仙霞西路88号1305室' },
          { 'value': '爱茜茜里(近铁广场)', 'address': '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺' },
          { 'value': '鲜果榨汁（金沙江路和美广店）', 'address': '普陀区金沙江路2239号金沙和美广场B1-10-6' },
          { 'value': '开心丽果（缤谷店）', 'address': '上海市长宁区威宁路天山路341号' },
          { 'value': '超级鸡车（丰庄路店）', 'address': '上海市嘉定区丰庄路240号' },
          { 'value': '妙生活果园（北新泾店）', 'address': '长宁区新渔路144号' },
          { 'value': '香宜度麻辣香锅', 'address': '长宁区淞虹路148号' },
          { 'value': '凡仔汉堡（老真北路店）', 'address': '上海市普陀区老真北路160号' },
          { 'value': '港式小铺', 'address': '上海市长宁区金钟路968号15楼15-105室' },
          { 'value': '蜀香源麻辣香锅（剑河路店）', 'address': '剑河路443-1' },
          { 'value': '北京饺子馆', 'address': '长宁区北新泾街道天山西路490-1号' },
          { 'value': '饭典*新简餐（凌空SOHO店）', 'address': '上海市长宁区金钟路968号9号楼地下一层9-83室' },
          { 'value': '焦耳·川式快餐（金钟路店）', 'address': '上海市金钟路633号地下一层甲部' },
          { 'value': '动力鸡车', 'address': '长宁区仙霞西路299弄3号101B' },
          { 'value': '浏阳蒸菜', 'address': '天山西路430号' },
          { 'value': '四海游龙（天山西路店）', 'address': '上海市长宁区天山西路' },
          { 'value': '樱花食堂（凌空店）', 'address': '上海市长宁区金钟路968号15楼15-105室' },
          { 'value': '壹分米客家传统调制米粉(天山店)', 'address': '天山西路428号' },
          { 'value': '福荣祥烧腊（平溪路店）', 'address': '上海市长宁区协和路福泉路255弄57-73号' },
          { 'value': '速记黄焖鸡米饭', 'address': '上海市长宁区北新泾街道金钟路180号1层01号摊位' },
          { 'value': '红辣椒麻辣烫', 'address': '上海市长宁区天山西路492号' },
          { 'value': '(小杨生煎)西郊百联餐厅', 'address': '长宁区仙霞西路88号百联2楼' },
          { 'value': '阳阳麻辣烫', 'address': '天山西路389号' },
          { 'value': '南拳妈妈龙虾盖浇饭', 'address': '普陀区金沙江路1699号鑫乐惠美食广场A13' }
        ]
      },
      handleSelect (item) {
        console.log(item)
      }
    },
    mounted () {
      this.restaurants = this.loadAll()
    }
  }
</script>
