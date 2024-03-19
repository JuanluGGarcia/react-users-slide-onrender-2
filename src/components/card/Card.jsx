import { useState } from 'react';
import { USERS } from '../../constants/users';
import Button from '../button/Button';

const Card = () => {
	const [user, setUser] = useState(0);

	return (
		<>
			<div>
				<img src={USERS[user].profileImage} alt='' />
				<h1>Name: {USERS[user].name}</h1>
				<p>Username: {USERS[user].username}</p>
				<p>Email: {USERS[user].email}</p>
			</div>
			<Button action={() => buttonPrevious(user, setUser)}>Previous</Button>
			<Button action={() => buttonNext(user, setUser)}>Next</Button>
		</>
	);
};

const buttonPrevious = (user, setUser) => {
	if (user === 0) return
    setUser(user - 1);
};

const buttonNext = (user, setUser) => {
    if (user === USERS.length -1) return
	setUser(user + 1);
};

export default Card;
