// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ActiveItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ActiveItem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ActiveItem must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ActiveItem", id.toString(), this);
    }
  }

  static load(id: string): ActiveItem | null {
    return changetype<ActiveItem | null>(store.get("ActiveItem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get docAddress(): Bytes {
    let value = this.get("docAddress");
    return value!.toBytes();
  }

  set docAddress(value: Bytes) {
    this.set("docAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get title(): string | null {
    let value = this.get("title");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set title(value: string | null) {
    if (!value) {
      this.unset("title");
    } else {
      this.set("title", Value.fromString(<string>value));
    }
  }
}

export class DocUploaded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DocUploaded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DocUploaded must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DocUploaded", id.toString(), this);
    }
  }

  static load(id: string): DocUploaded | null {
    return changetype<DocUploaded | null>(store.get("DocUploaded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get docAddress(): Bytes {
    let value = this.get("docAddress");
    return value!.toBytes();
  }

  set docAddress(value: Bytes) {
    this.set("docAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get title(): string | null {
    let value = this.get("title");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set title(value: string | null) {
    if (!value) {
      this.unset("title");
    } else {
      this.set("title", Value.fromString(<string>value));
    }
  }
}

export class DocDeleted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DocDeleted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DocDeleted must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DocDeleted", id.toString(), this);
    }
  }

  static load(id: string): DocDeleted | null {
    return changetype<DocDeleted | null>(store.get("DocDeleted", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get docAddress(): Bytes {
    let value = this.get("docAddress");
    return value!.toBytes();
  }

  set docAddress(value: Bytes) {
    this.set("docAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}