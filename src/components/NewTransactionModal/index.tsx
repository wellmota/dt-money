import * as Dialog from "@radix-ui/react-dialog"
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles"
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Decription" required />
          <input type="number" placeholder="Price" required />
          <input type="text" placeholder="Category" required />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp />
              Income
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown />
              Outcome
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Create</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
