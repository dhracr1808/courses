export class ShareValueChildren {
  private value: string;
  constructor(value: string) {
    this.value = value;
  }
  getValue() {
    return this.value;
  }

  setValue(value: string) {
    if (typeof value !== "string" || value.length <= 0) {
      throw new Error("El valor debe ser un string y no puede estar vacio");
    }
    this.value = value;
  }
}

export const shareValueChildren = new ShareValueChildren("");
