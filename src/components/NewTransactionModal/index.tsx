import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay } from "./styles"
import { X } from "phosphor-react"

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
          <button type="submit">Create</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
