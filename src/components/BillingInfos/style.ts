import styled, { css } from 'styled-components'

export const StyledBilling = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;

	padding-left: 2rem;
`

export const ListContainer = styled.ul`
	padding: 0;
	list-style: none;
`

export const ListItem = styled.li<{
	borderBottom?: boolean
	borderTop?: boolean
}>`
	padding: 1.4rem;

	display: flex;
	justify-content: space-between;

	${({ borderBottom }) =>
		borderBottom &&
		css`
			border-bottom: 1px solid var(--divisor);
		`}

	${({ borderTop }) =>
		borderTop &&
		css`
			margin-top: 2rem;
			padding-top: 2rem;
			border-top: 1px solid var(--primary-darkness);
		`}

	span {
		font-family: MuseoSansLight;
		font-size: 1.8rem;
		color: var(--primary-darkness);
	}
`
