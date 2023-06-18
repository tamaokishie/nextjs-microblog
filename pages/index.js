import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import utilStyle from "../styles/utils.module.css";
// //import { getSortedPostsData } from "../lib/posts";
import Layout from "@/components.js/layout";

import Link from "next/link";

export default function Home() {
	return <Layout>
		{/* <section className={utilStyle.headingMd}>
			<p>
				私はフルスタックエンジニアです
			</p>
		</section>

		<section>
		<h2>エンジニアのブログ</h2>
		<div className={styles.grid}>
			<article>
				<Link href="/">
					<img src="/images/thumbnail01.jpg" alt=""/>
				</Link>
				<Link href="/">
					<a className={utilStyle.boldText}>
					SSGとSSRの使い分けの場面はいつなのか？
					</a>
				</Link>
				<br/>
				<small className={utilStyle.lightText}>February 23, 2023</small>
			</article>
		</div>
		</section> */}

	</Layout>
}