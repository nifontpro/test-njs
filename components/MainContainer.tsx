import {FC, PropsWithChildren} from 'react';
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Head from "next/head";

const MainContainer: FC<PropsWithChildren<{ keywords: string }>> = ({children, keywords}) => {
	return (
		<>
			<Head>
				<meta property='og:title' content={"Главная страница" + keywords}/>
				<title>Главная страница</title>
			</Head>
			<div className={styles.navbar}>
				<Link href="/">
					<a>Главная</a>
				</Link>
				<Link href="/users">
					<a>Пользователи</a>
				</Link>
			</div>
			<div>
				{children}
			</div>
		</>
	);
};

export default MainContainer;