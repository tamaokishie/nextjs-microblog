import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
	return (
		<div>
			<Head>
				<title>最初の投稿</title>
			</Head>
			<h1>最初の投稿</h1>
			<Link href = "/">ホームへ戻る</Link>
		</div>
	);
}