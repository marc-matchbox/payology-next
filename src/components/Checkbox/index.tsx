import { ChangeEvent } from 'react'
import {
	CheckboxContainer,
	HiddenCheckbox,
	Icon,
	StyledCheckbox,
} from './style'

type CheckBoxProps = {
	className?: string
	checked: boolean
	onChange: (evt: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = ({ checked, className, ...props }: CheckBoxProps) => {
	return (
		<CheckboxContainer className={className}>
			<HiddenCheckbox checked={checked} {...props} />
			<StyledCheckbox checked={checked}>
				<Icon viewBox="0 0 24 24">
					<polyline points="20 6 9 17 4 12" />
				</Icon>
			</StyledCheckbox>
		</CheckboxContainer>
	)
}
