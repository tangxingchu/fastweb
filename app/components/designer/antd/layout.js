import React, {Component} from 'react';
import { Row, Col} from 'antd';

export default class Layout extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			rows: []
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
		let rowNum = [], colNum = [];
		for(let i = 0; i < this.props.row_num; i++) {
			rowNum.push(i);
		}
		for(let i = 0; i < this.props.col_num; i++) {
			colNum.push(i);
		}
		return (
			rowNum.map((rowItem, rindex) => {
				return (
					<Row>
						colNum.map((colItem, cindex) => {
							<Col>
							</Col>
						})
					</Row>
				)
			})
		)
	}

}

Layout.propTypes = {
	row_num: React.PropTypes.number,
	row_gutter: React.PropTypes.number,
	row_type: React.PropTypes.string,
	row_align: React.PropTypes.string,
	row_justify: React.PropTypes.string,
	col_num: React.PropTypes.number,
	col_span: React.PropTypes.number,
	col_className: React.PropTypes.string,
}

Layout.defaultProps = {
	row_num: 1,
	col_num: 1,
}


