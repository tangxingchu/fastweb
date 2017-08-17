import React, {Component} from 'react';
import { Row, Col, Menu, Icon, Button } from 'antd';
import { Layout } from './designer/custcomponents';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Container extends Component {
	
	constructor(props) {
		super(props);
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
		React.Children.map((child)=>{
			console.log(child);
		});
		return (
			<Row>
				<Col span={18}>
					<sampleNameSpace.icon type='retweet'/>
					<Button onClick={()=>{}}/>
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
		)
	}

}