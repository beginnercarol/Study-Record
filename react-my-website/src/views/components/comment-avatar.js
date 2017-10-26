import React from 'react';

class Avatar extends React.Component{
	render(){
		return (
			<span className="userInfo-avatar">
			<img src={this.props.user.src} alt={this.props.user.name}/>
			</span>
		);
	}
}

export default Avatar;