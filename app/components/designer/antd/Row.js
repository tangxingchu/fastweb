import React, {Component} from 'react';
import { Row } from 'antd';

export default class Row extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			gutter: null,
			type: 'top',
			justify: 'start',
			align: null,
			styles: {}
		};
	}

	/*
		1、函数式组件 如何设计？
		属性需要render 如何设计？同上一类问题

		2、纯数据结构转变为jsx结构？（转换为模板的概念？可行吗？应该可行）

		3、一个模块要分为：class组件定义(render jsx)，函数组件定义(返回jsx)，模板定义(套入数据)。
		设计，需要抽象部分组件。需要考虑组件属性之间的联动。

		4、同级之间的组件通讯（pubsubjs或者redux）

		5、看来设计态只能通过一个json结构来做了？
		怎么做到预览(设计态的react把生成的react代码一起打包， 生成的代码在预览文件夹内。)、运行时(xxx_app.bundle.js)、
		到底是用前端路由 还是 后端路由？
	*/
	render() {
		const {children} = this.props;
		const {gutter, type, justify, align, styles} = this.state;
		return (<Row style={styles} gutter={gutter} type={type} justify={justify} align={align}>
				{children}
			</Row>
		)
	}

}