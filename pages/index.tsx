import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	const [apiResponse, setApiResponse] = useState(
		'Press "Hello" to GET /api/hello'
	);
	const [outputStyle, setOutputStyle] = useState(styles.placeholder);

	function getHello() {
		axios
			.get('/api/hello')
			.then((res) => {
				setApiResponse(JSON.stringify(res.data));
				setOutputStyle('');
			})
			.catch((e) => {
				setApiResponse(JSON.stringify(e.response.data));
				setOutputStyle(styles.error);
			});
	}
	return (
		<div className={styles.container}>
			<Head>
				<title>Hello World</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<button className={styles.card} onClick={getHello}>
					Hello
				</button>
				<span>Output:</span>
				<span className={styles.code + ' ' + outputStyle}>{apiResponse}</span>
			</main>
		</div>
	);
};

export default Home;
