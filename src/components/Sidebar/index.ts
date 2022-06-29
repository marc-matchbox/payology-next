import styled from 'styled-components'

export const Sidebar = styled.aside`
	min-width: 20rem;
	max-width: 24rem;
	width: 100%;

	height: 100vh;

	background: var(--white) 0% 0% no-repeat padding-box;
	box-shadow: 0px 0.3rem 0.6rem var(--shadow);

	@media screen and (max-width: 1080px) {
		display: none;
	}
`
