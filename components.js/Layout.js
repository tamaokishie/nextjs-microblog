import Head from "next/head";
import styles from "./Layout.module.css"
import utilStyles from "../styles/utils.module.css"

const name = "Xiexie"
export const siteTitle = "Next.js blog"

function Layout({children}) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				<img src="/images/profile.png" width="200" className={utilStyles.borderCircle}/>
				<h1 className={utilStyles.heading2Xl}>{name}</h1>
			</header>
			<main>{children}</main>
		</div>
	);
}

export default Layout;