import { useLocation } from "react-router-dom";
import { useGetSingleBookQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/book";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type MyData = {
  data: IBook;
};
type MyQueryResult = {
  data: MyData;
  isLoading: boolean;
  isError: boolean;
};

export default function Details() {
  const location = useLocation();
  const path = location.pathname;
  const id = path.split("/")[2];

  const { data, isLoading, isError } = useGetSingleBookQuery(
    id
  ) as MyQueryResult;
  console.log(data?.data?.image);
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
          <CardActions>
            <Button size="small">Delete</Button>
            <Button size="small">Edit</Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
