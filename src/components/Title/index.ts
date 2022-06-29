import styled from 'styled-components'

export const Title = styled.h1`
	color: var(--primary);
	text-align: left;
	font-family: MuseoSansBold;
	font-size: 2.8rem;
	letter-spacing: 0px;

	&::after {
		content: '';

		display: block;
		border-bottom: 0.2rem solid var(--primary);
		width: 5rem;

		margin-top: 1.2rem;
	}
`
