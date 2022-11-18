import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
  DocCollection,
  DocDeleted as DocDeletedEvent,
  DocUploaded as DocUploadedEvent
} from "../generated/DocCollection/DocCollection"
import { DocUploaded, DocDeleted, ActiveItem } from "../generated/schema"

export function handleDocDeleted(event: DocDeletedEvent): void {
  let docDeleted = DocDeleted.load(getIdFromEventParams(event.params.tokenId, event.params.docAddress))
  let activeItem = ActiveItem.load(getIdFromEventParams(event.params.tokenId, event.params.docAddress))

  if (!docDeleted) {
    docDeleted = new DocDeleted(getIdFromEventParams(event.params.tokenId, event.params.docAddress))
  }
  docDeleted.owner = event.params.owner
  docDeleted.docAddress = event.params.docAddress
  docDeleted.tokenId = event.params.tokenId
  
  docDeleted.save()
  activeItem!.save()

}

export function handleDocUploaded(event: DocUploadedEvent): void {
  let docUploaded = DocUploaded.load(getIdFromEventParams(event.params.tokenId, event.params.docAddress))
  let activeItem = ActiveItem.load(getIdFromEventParams(event.params.tokenId, event.params.docAddress))

  if (!docUploaded) {
    docUploaded = new DocUploaded(getIdFromEventParams(event.params.tokenId, event.params.docAddress))
  }
  if (!activeItem) {
    activeItem = new ActiveItem(getIdFromEventParams(event.params.tokenId, event.params.docAddress))
  }
  docUploaded.owner = event.params.owner
  activeItem.owner = event.params.owner

  docUploaded.docAddress = event.params.docAddress
  activeItem.docAddress = event.params.docAddress

  docUploaded.tokenId = event.params.tokenId
  activeItem.tokenId = event.params.tokenId

  docUploaded.title = event.params.title
  activeItem.title = event.params.title
  
  docUploaded.save()
  activeItem.save()
}

function getIdFromEventParams(tokenId: BigInt, docAddress: Address): string {
  return tokenId.toHexString() + docAddress.toHexString()
}
