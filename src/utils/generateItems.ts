export const generateItems = (paymentAmount: string) => {
	return [
		{
			title: 'Billing',
			value: '00990066',
			borderBottom: true,
		},
		{
			title: 'Due Date',
			value: new Intl.DateTimeFormat('en-US').format(new Date()),
			borderBottom: true,
		},
		{
			title: 'Invoice Amount',
			value: paymentAmount,
		},
		{
			title: 'Total Balance',
			value: paymentAmount,
			borderTop: true,
			style: {
				fontWeight: 'bolder',
			},
		},
	]
}
