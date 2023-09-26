import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { IBook } from "./book";
import { SerializedError } from "@reduxjs/toolkit";

export type IPostResponse =
  | {
      data: {
        statusCode: number;
        success: boolean;
        message: string;
        data: IBook | null;
      };
    }
  | {
      error: FetchBaseQueryError | SerializedError;
    };