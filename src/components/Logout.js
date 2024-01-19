import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			// Retrieve the token from local storage
			const token = localStorage.getItem('token');
			if (token) {
				// Set up headers with authorization token for the API call
				const config = {
					headers: {
						Authorization: token,
					},
				};
				// Make a POST request to the logout endpoint
				await axios.post('/api/logout', {}, config);
				// Remove the token from local storage
				localStorage.removeItem('token');
			}
			// Redirect to the login page
			navigate('/login');
		} catch (error) {
			console.error('Error during logout', error);
		}
	};

	// Call handleLogout function immediately when the component renders
	React.useEffect(() => {
		handleLogout();
	}, []);

	// Render a message or a loader (optional)
	return <div>Logging out...</div>;
};

export default Logout;
