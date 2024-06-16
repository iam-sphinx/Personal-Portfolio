class ApiError extends Error {
    status: number;
    errors: string[];
    data: any;
  
    constructor(
      message: string = "Something went wrong",
      status: number = 500,
      errors: string[] = [],
      stack: string = "",
      data: any = null
    ) {
      super(message);
      this.status = status;
      this.errors = errors;
      this.data = data;
  
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export { ApiError };
  