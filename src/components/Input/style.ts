import styled from 'styled-components'

const styleBase = `
	border: 0.1rem solid var(--secondary-light);
	margin-bottom: 2rem;

	padding-inline: 1.2rem;

	font-size: 1.8rem;

	height: 4.4rem;
	border-radius: 0.3rem;
	background: var(--white);
`

export const StyledInput = styled.input`
	${styleBase}
`

export const ContainerSelect = styled.div`
	position: relative;
	width: 100%;

	&::after {
		content: '▼';
		font-size: 1.2rem;
		color: var(--secondary-light);
		top: 1.5rem;
		right: 1.5rem;
		position: absolute;
	}
`

export const StyledSelect = styled.select`
	${styleBase}
	appearance: none;
	width: 100%;
`
