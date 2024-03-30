const Button = ({ action, children }) => {
	console.log(action)
	return <button onClick={action}>{children}</button>;
};



export default Button;
