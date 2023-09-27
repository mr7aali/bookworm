import { IBook } from "../../types/book";

export type RevewComponentProps = {
    book: IBook;
  };
  
 export type UpdateComponentProps= {
    open: boolean;
    book: IBook;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }