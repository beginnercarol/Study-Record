import React from 'react';
import UserInfo from './comment-userInfo';

class Comment extends React.Component{
	render(){
		console.log(this.props.author);
		return (
		<div className="comment">
			<UserInfo user={this.props.author.user} />
			<div className="comment-text">
				{this.props.text}
			</div>
			<div className="comment-date">
				{this.props.date}
			</div>
		</div>);
	}
}

export default Comment;