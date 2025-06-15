export class HttpException<T> extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
    public readonly data?: T,
  ) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, HttpException.prototype);
  }
}
