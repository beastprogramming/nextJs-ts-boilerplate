import { Html, Head, Main, NextScript } from 'next/document';
import { ReactEventHandler } from 'react';

export default function Document(): JSX.Element {
    return (
        <Html lang="en">
            <Head>
                <meta content="yes" name="apple-mobile-web-app-capable" />
                <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
                <meta
                    content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
                    name="viewport"
                />
                <link href="https://www.google-analytics.com" rel="preconnect" />
                <link href="https://www.googletagmanager.com" rel="preconnect" />
                <link href="https://fonts.gstatic.com" rel="preconnect" />
                <link href="https://fonts.googleapis.com" rel="preconnect" />
                <link
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;600;700;800;900&family=Rubik:wght@300;400;500;600;700&display=swap"
                    rel="preload"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;600;700;800;900&family=Rubik:wght@300;400;500;600;700&display=swap"
                    media="print"
                    onLoad={"this.media='all'" as unknown as ReactEventHandler<HTMLLinkElement>}
                    rel="stylesheet"
                />
                <noscript>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;600;700;800;900&family=Rubik:wght@300;400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                </noscript>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
