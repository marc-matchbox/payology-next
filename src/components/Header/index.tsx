import Image from 'next/image'
import { AlignCenterContainer } from '../Container'

import { StyledHeader, StyledLogo } from './style'

export const Header = () => {
	return (
		<StyledHeader>
			<StyledLogo>
				<Image src="/img/logo.svg" alt="Payology" width={162} height={30} />
			</StyledLogo>
			<AlignCenterContainer>
				<span className="font-16">PAYOLOGY / Payment</span>
			</AlignCenterContainer>
		</StyledHeader>
	)
}
