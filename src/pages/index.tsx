import { Container } from '@/components/Container'
import { Content } from '@/components/Content'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Sidebar } from '@/components/Sidebar'
import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<Container>
				<Sidebar />
				<Main>
					<Content className="fadeInDown" />
				</Main>
				<Footer />
			</Container>
		</>
	)
}

export default Home
