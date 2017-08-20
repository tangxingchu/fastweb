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
		看来设计态只能通过一个json结构来做了？
		怎么做到预览(设计态的react把生成的react代码一起打包， 生成的代码在预览文件夹内。)、运行时(xxx_app.bundle.js)、
		到底是用前端路由 还是 后端路由？
	*/
	render() {
		const {children} = this.props;
		const {gutter, type, justify, align, styles} = this.state;
		return (<Row style={styles} gutter={gutter} type={type} justify={justify} align={align}>
			{children}
		</Row>)
	}

}