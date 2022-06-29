import { useReactToPrint } from 'react-to-print'
import { paymentData } from '@/data/paymentData'
import { generateItems } from '@/utils/generateItems'
import { printPageArea } from '@/utils/printComponent'
import { ChangeEvent, useRef, useState } from 'react'
import { BillingInfos } from '../BillingInfos'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { AlignCenterContainer } from '../Container'
import { Input } from '../Input'
import { PrintBilling } from '../PrintBilling'
import { Title } from '../Title'
import { StyledContent, StyledPaymentDetails } from './style'
import { createPrintFields } from '@/utils/createPrintFields'

type ContentProps = {
	className?: string
}

export const Content = ({ className }: ContentProps) => {
	const [allValues, setAllValues] = useState<{ [key: string]: string }>({
		paymentAmount: '$0.00',
	})
	const [checked, setChecked] = useState(false)

	const printRef = useRef<HTMLDivElement>(null)

	const handlePrint = useReactToPrint({ content: () => printRef.current })

	return (
		<StyledContent className={className}>
			<StyledPaymentDetails>
				<Title>Payment Details</Title>
				{paymentData(setAllValues).map((payment: any) => (
					<Input key={payment.id} {...payment} />
				))}
				<AlignCenterContainer>
					<label
						style={{
							color: 'var(--primary-light)',
							fontSize: '1.6rem',
							cursor: 'pointer',
							marginBottom: '2rem',
						}}
					>
						<Checkbox
							checked={checked}
							onChange={(evt: ChangeEvent<HTMLInputElement>) =>
								setChecked(evt.target.checked)
							}
						/>
						<span style={{ marginLeft: 8 }}>
							I agree to the&nbsp;
							<a
								href="#"
								style={{ color: 'var(--primary)', textDecoration: 'underline' }}
							>
								terms & conditions
							</a>
						</span>
					</label>
				</AlignCenterContainer>
				<Button
					onClick={() => {
						if (!checked) {
							alert('Agree our terms and conditions')
						} else {
							handlePrint()
						}
					}}
				>
					Pay {allValues['paymentAmount']}
				</Button>
			</StyledPaymentDetails>
			<BillingInfos items={generateItems(allValues['paymentAmount'])} />
			<PrintBilling innerRef={printRef} values={createPrintFields(allValues)} />
		</StyledContent>
	)
}
