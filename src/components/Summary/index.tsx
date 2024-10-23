import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { SummaryCard, SummaryContainer } from "./styles"

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entries</span>
          <ArrowCircleUp size={32} color="#00eb37e" />
        </header>
        <strong>$ 17,400.00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Payments</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>$ 17,400.00</strong>
      </SummaryCard>
      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>$ 17,400.00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
