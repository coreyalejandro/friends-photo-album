/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
const Friends = () => {
	const [friends, setFriends] = useState([]);

	useEffect(() => {

		axiosWithAuth()
			.get("http://localhost:9000/api/friends")
			.then((resp) => {
				setFriends(resp.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="friends-list">
			<h1>FRIENDS</h1>
			<ul>
				{friends.map((amigos, index) => {
					return (
						<li key={index}>
							{amigos.name} - {amigos.age} - {amigos.email}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Friends;
