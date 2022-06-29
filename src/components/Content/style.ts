import styled, { css } from 'styled-components'

export const StyledContent = styled.div`
	max-width: 75.8rem;
	width: 100%;

	padding: 2.7rem;
	margin-inline: 2.7rem;
	border-radius: 0.3rem;

	background-color: var(--white);
	box-shadow: 0 0.3rem 0.6rem var(--shadow);

	display: flex;

	@media screen and (max-width: 1080px) {
		flex-wrap: wrap;
	}
`

export const StyledPaymentDetails = styled.div`
	display: flex;
	justify-content: center;

	flex-direction: column;

	width: 100%;

	padding-inline: 2rem;

	border-right: 1px solid var(--secondary);

	@media screen and (max-width: 1080px) {
		border-right: 0;
		margin-top: 4rem;
	}
`
