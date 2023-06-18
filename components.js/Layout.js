import styles from "./layout.module.css";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Xiexie";
export const siteTitle = "Next.js Blog";

function Layout({children}) {
return (
	<div className={styles.container}>
		<Head>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<header className={styles.header}>
			<img src="/images/profile.png" width="200" className={utilStyles.borderCircle}/>
			<h1>{name}</h1>
		</header>
		<main>{children}</main>
	</div>
	);
}

export default Layout;