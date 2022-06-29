import styled from 'styled-components'

export const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`

export const Icon = styled.svg`
	fill: none;
	stroke: white;
	stroke-width: 2px;
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`

export const StyledCheckbox = styled.div<{ checked: boolean }>`
	display: inline-block;
	width: 2rem;
	height: 2rem;
	background: ${props =>
		!props.checked ? 'var(--white)' : 'var(--primary-dark)'};
	border: 1px solid var(--secondary-light);
	border-radius: 3px;
	transition: all 1s ease-in-out;

	${Icon} {
		visibility: ${props => (props.checked ? 'visible' : 'hidden')};
	}
`
