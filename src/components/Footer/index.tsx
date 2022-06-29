import { StyledFooter } from './style'

export const Footer = () => {
	return (
		<StyledFooter>
			&copy; Copyright {new Date().getFullYear()} Payology.com, LLC. All rights
			reserved.
		</StyledFooter>
	)
}
