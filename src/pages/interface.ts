import { IBook } from "../types/book";

export type MyQueryResult = {
  data: MyData;
  isLoading: boolean;
  isError: boolean;
 
};


type MyData = {
  data: IBook[];
  // Other properties specific to your data structure
};