import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = ({
	date,
	username,
	text,
	profileeImageUrl,
	removeMessage
}) => (
	<div>
		<img
			src={profileeImageUrl || DefaultProfileImg}
			alt={username}
			height='100'
			width='100'
			className='timeline-image'
		/>
		<div className='message-area'>
			<Link to='/'>@{username} &nbsp;</Link>
			<span className='text-muted'>
				<Moment className='text-muted' format='Do MM YYYY'>
					{date}
				</Moment>
			</span>
			<p>{text}</p>
			<a className='btn btn-danger' onClick={removeMessage}>
				Delete
			</a>
		</div>
	</div>
);

export default  MessageItem;