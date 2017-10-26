import React from 'react';
import Avatar from './comment-avatar';

class UserInfo extends React.Component{
	render(){
		console.log(this.props.name);
		return (
			<div className="comment-userInfo">
				<Avatar user={this.props.user} />
				<div className="comment-userInfo-name">
					{this.props.user.name}
				</div>
			</div>
		);
	}
}

export default UserInfo;