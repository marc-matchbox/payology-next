import { ContainerSelect, StyledInput, StyledSelect } from './style'

type Option = { label: string; value: string }

export type InputProps = {
	type?: 'select' | 'text' | 'number'
	options?: Option[]
	defaultTitle?: string
	[key: string]: any
}

export const Input = ({
	type,
	options,
	defaultTitle,
	...props
}: InputProps) => {
	if (type === 'select')
		return (
			<ContainerSelect>
				<StyledSelect {...props}>
					<option selected disabled hidden value="">
						{defaultTitle}
					</option>
					{options?.map(({ label, value }) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</StyledSelect>
			</ContainerSelect>
		)

	return <StyledInput {...props} />
}
