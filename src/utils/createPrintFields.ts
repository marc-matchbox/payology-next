type NameFields =
	| 'paymentAmount'
	| 'nameAccount'
	| 'accountType'
	| 'routingNumber'
	| 'accountNumber'
	| 'confirmAccountNumber'

const getTruthNamesByKey = (key: NameFields) =>
	({
		paymentAmount: { title: 'Payment Amount', borderBottom: true },
		nameAccount: { title: 'Name on Account', borderBottom: true },
		accountType: { title: 'Account Type', borderBottom: true },
		routingNumber: { title: 'Routing Number', borderBottom: true },
		accountNumber: { title: 'Account Number', borderBottom: true },
		confirmAccountNumber: {
			title: 'Confirm Account Number',
		},
	}[key])

const activeObj = {
	'0': 'Deactive',
	'1': 'Active',
}

export const createPrintFields = (allValues: { [key: string]: string }) => {
	return [
		...Object.entries(allValues).map(([key, value]) => ({
			value: key === 'accountType' ? activeObj[value as '0' | '1'] : value,
			...getTruthNamesByKey(key as NameFields),
		})),
		{
			title: 'Total Balance',
			value: allValues['paymentAmount'],
			borderTop: true,
			style: {
				fontWeight: 'bolder',
			},
		},
	]
}
