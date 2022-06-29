import { generateItems } from '@/utils/generateItems'
import { Title } from '../Title'
import { ListContainer, ListItem, StyledBilling } from './style'

export type BillingItems = { title: string; value: string }[]

type BillingInfosProps = {
	items: BillingItems
}

export const BillingInfos = ({ items }: BillingInfosProps) => {
	return (
		<StyledBilling>
			<Title>Billing Details</Title>
			<ListContainer>
				{items.map((item, idx) => (
					<ListItem key={item.title} {...item}>
						<span>{item.title}</span>
						<span>{item.value}</span>
					</ListItem>
				))}
			</ListContainer>
		</StyledBilling>
	)
}
