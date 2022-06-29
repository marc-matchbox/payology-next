import { BillingInfos, BillingItems } from '../BillingInfos'

type PrintBillingProps = {
	innerRef: any
	values: BillingItems
}

export const PrintBilling = ({ innerRef, values }: PrintBillingProps) => {
	return (
		<div id="billingInfos">
			<div ref={innerRef} style={{ paddingRight: '2rem' }}>
				<BillingInfos items={values} />
			</div>
		</div>
	)
}
