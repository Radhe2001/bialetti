'use client';
import React, { useEffect } from 'react';
// import createConnection from '../../db/config';


function NullComponent() {
	useEffect(() => {
		// createConnection();
	}, []);
	return null;
}

export default NullComponent;
