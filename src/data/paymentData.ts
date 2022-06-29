import { InputProps } from '@/components/Input'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export const paymentData = (
	setAllValues: Dispatch<
		SetStateAction<{
			[key: string]: any
		}>
	>
): InputProps => {
	const getValueOnChange = (evt: ChangeEvent<HTMLInputElement>) =>
		setAllValues(allValues => ({
			...allValues,
			[evt.target.name]: evt.target.value,
		}))
	return [
		{
			id: 'paymentAmount',
			name: 'paymentAmount',
			placeholder: 'Payment Amount',
			type: 'number',
			onChange: (evt: ChangeEvent<HTMLInputElement>) =>
				setAllValues(allValues => ({
					...allValues,
					[evt.target.name]: `$${Number(evt.target.value).toFixed(2)}`,
				})),
		},
		{
			id: 'nameAccount',
			name: 'nameAccount',
			placeholder: 'Name on Account',
			type: 'text',
			onChange: getValueOnChange,
		},
		{
			id: 'accountType',
			name: 'accountType',
			defaultTitle: 'Account Type',
			type: 'select',
			options: [
				{
					label: 'Deactive',
					value: '0',
				},
				{
					label: 'Active',
					value: '1',
				},
			],
			onChange: getValueOnChange,
		},
		{
			id: 'routingNumber',
			name: 'routingNumber',
			placeholder: 'Routing Number',
			type: 'number',
			onChange: getValueOnChange,
		},
		{
			id: 'accountNumber',
			name: 'accountNumber',
			placeholder: 'Account Number',
			type: 'number',
			onChange: getValueOnChange,
		},
		{
			id: 'confirmAccountNumber',
			name: 'confirmAccountNumber',
			placeholder: 'Confirm Account Number',
			type: 'number',
			onChange: getValueOnChange,
		},
	]
}
