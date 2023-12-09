import { useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => {
	useEffect(() => {
		const handleMessage = (_event, args) => alert(args);

		// listen to the 'message' channel
		window.electron.receiveHello(handleMessage);

		return () => {
			window.electron.stopReceivingHello(handleMessage);
		};
	}, []);

	const onSayHiClick = () => {
		window.electron.sayHello();
	};

	return (
		<Layout title="Home | Next.js + TypeScript + Electron Example">
			<h1>Hello Next.js 👋</h1>
			<button type="button" onClick={onSayHiClick} className="bg-indigo-600 font-semibold text-white py-1 px-1 rounded">Say hi to electron</button>
			<p>
				<Link href="/about">About</Link>
			</p>
		</Layout>
	);
};

export default IndexPage;
