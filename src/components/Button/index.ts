import styled from 'styled-components'

export const Button = styled.button`
	height: 4.4rem;
	border-radius: 0.3rem;

	background: var(--primary-dark);
	font-size: 1.8rem;
	color: var(--white);

	border: 0;

	transition: all 0.3s ease-in-out;

	&:hover {
		background: var(--primary-light);
		cursor: pointer;
	}

	&:active {
		background: var(--white);
		color: var(--primary-darkness);
		border: 1px solid var(--primary);
		cursor: pointer;
	}
`
