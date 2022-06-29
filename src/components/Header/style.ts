import styled from 'styled-components'

export const StyledHeader = styled.header`
	position: absolute;
	top: 0;
	left: 0;

	background: rgba(255, 255, 255, 0.15);
	box-shadow: 0px 0.3rem 0.6rem var(--shadow);

	width: 100%;

	display: flex;
	z-index: 1;

	@media screen and (max-width: 1080px) {
		color: var(--primary);
	}
`

export const StyledLogo = styled.div`
	padding: 1.5rem 2rem;
	min-width: 20rem;
	max-width: 24rem;
	width: 100%;

	margin-right: 3rem;
`
