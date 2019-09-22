import React from 'react';
import MessageList from '../containers/MessageList';
import UserAside from '../components/UserAside';

const MessageTimeLine = props => {
	console.log('img ', props.profileImageUrl);
	return (
		<div className='row'>
			<UserAside
				profileImageUrl={props.profileImageUrl}
				username={props.username}
			/>
			<MessageList />
		</div>
	);
};

export default MessageTimeLine;
