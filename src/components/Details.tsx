/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useLocation, useNavigate } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/api/apiSlice";
import { IBook } from "../types/book";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../redux/hook";
import { toast } from "react-toastify";

type MyData = {
  data: IBook;
};
type MyQueryResult = {
  data: MyData;
  isLoading: boolean;
  isError: boolean;
};

export default function Details() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const id = path.split("/")[2];
  const email = useAppSelector((state) => state.user.user.email);
  const { data, isLoading, isError } = useGetSingleBookQuery(
    id
  ) as MyQueryResult;
  const option = {
    id: id,
    email: email as string,
  };
  const [deletePost, others] = useDeleteBookMutation();

  const handleDelete = async () => {
    const r = await deletePost(option);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(r?.data?.message);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (!r?.data?.success) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      toast.error(r?.data?.message);
      return;
    }
    toast.success("Book deleted successfully");
    navigate("/");
  };

  return (
    <div className="container mx-auto">
      <Card
        sx={{
          maxWidth: 800,
          border: "1px solid #eae8e4",
          my: "80px",
          display: "flex",
          margin: "80px auto",
          background: "#FBFEFB",
        }}
      >
        <div
          style={{
            width: "350px",
            height: "200px",
            padding: "4px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}
            src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/12-120x183.jpg"
            alt=""
          />
        </div>
        <div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data?.data?.title}
            </Typography>

            <p className="text-gray-700 hover:text-[#f75454] cursor-pointer mt-[-2px]">
              Author: {data?.data?.author}
            </p>
            <p>Genre: {data?.data?.genre}</p>
            <p>Publication Date: {data?.data?.publicationDate}</p>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={() => handleDelete()}
              size="small"
              variant="outlined"
              color="error"
              fullWidth
            >
              Delete
            </Button>
            <Button size="small" variant="contained" color="primary" fullWidth>
              Edit
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
