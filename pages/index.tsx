import type {NextPage} from 'next'

import styles from '../styles/Home.module.scss'
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div>
			<div className={styles.navbar}>
				<Link href="/">
					<a>Главная</a>
				</Link>
				<Link href="/users">
					<a>Пользователи</a>
				</Link>
			</div>
			<h1>Главная страница</h1>
		</div>
	)
}

export default Home
