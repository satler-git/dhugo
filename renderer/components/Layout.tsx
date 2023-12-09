import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
    children: ReactNode;
    title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <header>
            <nav>
                <Link href="/" className="bg-amber-300 rounded">
                    Home
                </Link>{" "}
                |{" "}
                <Link href="/about" className="bg-amber-300 rounded">
                    About
                </Link>{" "}
                |{" "}
                <Link href="/initial-props" className="bg-amber-300 rounded">
                    With Initial Props
                </Link>
            </nav>
        </header>
        {children}
        <footer>
            <hr />
            <span>I'm here to stay (Footer)</span>
        </footer>
    </div>
);

export default Layout;
