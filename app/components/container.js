import React, {Component} from 'react';
import { Row, Col, Menu, Icon, Button, Input, AutoComplete, Form, Select, Modal} from 'antd';
import { Layout } from './designer/antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const Option = Select.Option;

const modules = {
	'Row': Row,
}

const ACOption = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

const dataSource = [{
  title: '话题',
  children: [{
    title: 'AntDesign',
    count: 10000,
  }, {
    title: 'AntDesign UI',
    count: 10600,
  }],
}, {
  title: '问题',
  children: [{
    title: 'AntDesign UI 有多好',
    count: 60100,
  }, {
    title: 'AntDesign 是啥',
    count: 30010,
  }],
}, {
  title: '文章',
  children: [{
    title: 'AntDesign 是一个设计语言',
    count: 100000,
  }],
}];

const renderTitle = (title) => {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >更多
      </a>
    </span>
  );
}

const options = dataSource.map(group => (
  <OptGroup
    key={group.title}
    label={renderTitle(group.title)}
  >
    {group.children.map(opt => (
      <ACOption key={opt.title} value={opt.title}>
        {opt.title}
        <span className="certain-search-item-count">{opt.count} 人 关注</span>
      </ACOption>
    ))}
  </OptGroup>
)).concat([
  <ACOption disabled key="all" className="show-all">
    <a
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      查看所有结果
    </a>
  </ACOption>,
]);

const Complete = () => {
  return (
    <div className="certain-category-search-wrapper" style={{ width: 250 }}>
      <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: 300 }}
        size="large"
        style={{ width: '100%' }}
        dataSource={options}
        placeholder="input here"
        optionLabelProp="value"
      >
        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
    </div>
  );
}


export default class Container extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			rowNum: '',
			colNum: '',
			children: [{'metaType': 'Row', 'style': {'border': '1px dashed red'}},{'metaType': 'Row', 'style': {'border': '1px dashed blue'}}]
		};
	}
	
	componentWillMount() {
		
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	componentWillUpdate(nextProps, nextState) {
		
	}

	componentDidUpdate(prevProps, prevState) {
		
	}

	render() {
		let rowNum = 4;
		let rows = [];
		while(rowNum-- > 0) {
			rows.push(rowNum);
		}
		let sampleNameSpace = {icon: Icon};
		React.Children.map(this.props.children, (child) => {
			console.log(child);
		});
		var createEl_div = React.createElement(Button, {type: 'primary'}, 'fafa;fa;fka;kfaklfa1');
		return (
			<Row>
				<Row>
					<Col span={18} style={styles.dashedCol}>
						<sampleNameSpace.icon type='retweet'/>
						<Button onClick={()=>{}}/>						
						<Complete/>
						<Button type="primary" onClick={()=>{}}>添加1行4列</Button>
						{createEl_div}
					</Col>
					<Col span={6}>
						<Menu
							onClick={this.handleClick}
							selectedKeys={['mail']}
							mode="horizontal"
						  >
							<Menu.Item key="mail">
							  <Icon type="mail" />Navigation One
							</Menu.Item>
							<Menu.Item key="app" disabled>
							  <Icon type="appstore" />Navigation Two
							</Menu.Item>
							<SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
							  <MenuItemGroup title="Item 1">
								<Menu.Item key="setting:1">Option 1</Menu.Item>
								<Menu.Item key="setting:2">Option 2</Menu.Item>
							  </MenuItemGroup>
							  <MenuItemGroup title="Item 2">
								<Menu.Item key="setting:3">Option 3</Menu.Item>
								<Menu.Item key="setting:4">Option 4</Menu.Item>
							  </MenuItemGroup>
							</SubMenu>
							<Menu.Item key="alipay">
							  <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
							</Menu.Item>
						  </Menu>
						  
					</Col>
				</Row>
				<Row>
					<Col span={18}>
						<div style={{height: 'calc(100% - 140px)', backgroundColor:'#efefef', border: '1px solid #ccc', overflow: 'auto'}}>
							{this.state.children.map((item, index)=> {
								let Component = modules[item.metaType];
								return (<Component {...item}>row{index} c</Component>);
							})}
							
						</div>
					</Col>
					<Col span={6}></Col>
				</Row>
				<Modal
								title="登录"
								visible={true}
								style={{textAlign: 'center', whiteSpace: 'nowrap'}}
								width={400}
								footer={null}
								maskClosable={false}
								closable={false}>
								<WrappedLoginForm />
							</Modal>
			</Row>
		)
	}

}

const styles = {
	dashedCol: {
		border: '1px dashed #ccc',
	},
	loginForm: {
		height: '4px',	
	},
}

class LoginForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {loading: false, message: ''};
	}

	handleSubmit(e) {
		this.setState({loading: true});
		e.preventDefault();
		let that = this;
		this.props.form.validateFields((err, values) => {
			if (!err) {
				//console.log('Received values of form: ', values);
				/*global.Zqmb.login(values.entry, values.userName, values.password, '', '').then(function(data){
					
				}).catch(function(error){
					
				});*/
				window.setTimeout(function(){
					window.localStorage.setItem('mb_userName', values.userName);
					global.mbContainer.hideLoginModal();
					that.setState({loading: false});
				}, 2000)
			} else {
				this.setState({loading: false});
			}
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: { span: 4 },
			wrapperCol: { span: 19 },
		};
		return (
			<Form onSubmit={this.handleSubmit.bind(this)} style={styles.loginForm}>
				<FormItem>
					{this.state.message}
				</FormItem>
				<FormItem label="入口" {...formItemLayout}>
					{getFieldDecorator('entry', {
						})(
						<Select>
							<Option value="moaservice">moaservice</Option>
						</Select>
					)}
				</FormItem>
				<FormItem label="用户名" {...formItemLayout}>
					{getFieldDecorator('userName', {
						rules: [{ required: true, message: '请输入用户名!' }],
					})(
						<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
					)}
				</FormItem>
				<FormItem label="密码" {...formItemLayout}>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: '请输入密码!' }],
					})(
						<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
					)}
				</FormItem>
				<FormItem>
					<Button type="primary" htmlType="submit" loading={this.state.loading}>登录</Button>
				</FormItem>
			</Form>
		)
	}
}

const WrappedLoginForm = Form.create()(LoginForm);