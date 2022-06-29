import '@/styles/globals.css'
import '@/styles/animations.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link
					rel="shortcut icon"
					href="/img/logo_icon.svg"
					type="image/x-icon"
				/>
				<title>Payology</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
