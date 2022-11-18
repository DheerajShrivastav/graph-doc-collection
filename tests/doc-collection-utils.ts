import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DocDeleted,
  DocUploaded
} from "../generated/DocCollection/DocCollection"

export function createDocDeletedEvent(
  owner: Address,
  docAddress: Address,
  tokenId: BigInt
): DocDeleted {
  let docDeletedEvent = changetype<DocDeleted>(newMockEvent())

  docDeletedEvent.parameters = new Array()

  docDeletedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  docDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "docAddress",
      ethereum.Value.fromAddress(docAddress)
    )
  )
  docDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return docDeletedEvent
}

export function createDocUploadedEvent(
  owner: Address,
  docAddress: Address,
  tokenId: BigInt,
  title: string
): DocUploaded {
  let docUploadedEvent = changetype<DocUploaded>(newMockEvent())

  docUploadedEvent.parameters = new Array()

  docUploadedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  docUploadedEvent.parameters.push(
    new ethereum.EventParam(
      "docAddress",
      ethereum.Value.fromAddress(docAddress)
    )
  )
  docUploadedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  docUploadedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )

  return docUploadedEvent
}
