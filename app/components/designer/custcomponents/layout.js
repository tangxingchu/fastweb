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
		return (
			<Row>
				<Col span={24}>
					{this.state.rows.map((item, index)=> {
						return null;
					})}
				</Col>
			</Row>
		)
	}

}

Layout.propTypes = {
	row_gutter: React.PropTypes.number,
	row_type: React.PropTypes.string,
	row_align: React.PropTypes.string,
	row_justify: React.PropTypes.string,
	col_span: React.PropTypes.number,
	col_className: React.PropTypes.string,
}

Layout.defaultProps = {
	
}


