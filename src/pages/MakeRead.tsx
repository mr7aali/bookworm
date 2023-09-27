/* eslint-disable prefer-const */

import { useGetBooksQuery } from "../redux/api/apiSlice";
import { MyQueryResult } from "./interface";
import { useAppSelector } from "../redux/hook";
import Cart from "../components/Cart";
import { IBook } from "../types/book";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const MakeRead = () => {
  let NotFoundConed, contained;
  const email = useAppSelector((state) => state.user.user.email) ?? "-1";
  const { data } = useGetBooksQuery(undefined) as MyQueryResult;

  const makeRead = data?.data?.filter((b) => b.markAsReadList.includes(email));

  if (makeRead?.length > 0) {
    contained = makeRead?.map((b: IBook) => <Cart key={b._id} book={b} />);
  } else {
    NotFoundConed = (
      <div className="flex h-[70vh] justify-center items-center text-2xl">
        {/* <h1>Click to add</h1>? */}
        <Link to="/">
          <Button
            sx={{ margin: "1px" }}
            variant="outlined"
            color="error"
            className="mx-2"
          >
            Click to add in makeread
          </Button>
        </Link>
      </div>
    );
  }
  return (
    <div className="mt-10">
      <div className="grid grid-cols-4 container mx-auto"> {contained}</div>
      <div>{NotFoundConed}</div>
    </div>
  );
};

export default MakeRead;
