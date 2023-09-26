import { IBook } from "../types/book";

export type MyQueryResult = {
  data: {
    data: IBook[];
    // Other properties specific to your data structure
  }
  
  isLoading: boolean;
  isError: boolean;
  // Other properties returned by your specific hook
};


// type MyData = {
//   data: IBook[];
//   // Other properties specific to your data structure
// };