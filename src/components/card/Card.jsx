import { useState } from 'react';
import { USERS } from '../../constants/users';

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
			{/* <Button action={() => buttonPrevious(user, setUser)}>Previous</Button>
			<Button action={() => buttonNext(user, setUser)}>Next</Button> */}

			{/* Tengo que hacerlo de esta manera porque no puedo controlar que botón pulso haciendolo
			de la otra manera */}
			<button
				onClick={() => buttonPrevious(user, setUser)}
				disabled={user <= 0}
			>
				Previous
			</button>
			<button
				onClick={() => buttonNext(user, setUser)}
				disabled={user === USERS.length - 1}
			>
				Next
			</button>
		</>
	);
};

const buttonPrevious = (user, setUser) => {
	console.log();
	if (user === 0) return;
	setUser(user - 1);
};

const buttonNext = (user, setUser) => {
	if (user === USERS.length - 1) return;
	setUser(user + 1);
};

export default Card;
