/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/api/apiSlice";
import { IBook } from "../types/book";
import { BsFillCartCheckFill } from "react-icons/bs";
import Button from "@mui/material/Button";
import { useAppSelector } from "../redux/hook";
import { toast } from "react-toastify";
import UpdateModal from "./UpdateModal";
import { useState } from "react";

type MyData = {
  data: IBook;
};
type MyQueryResult = {
  data: MyData;
  isLoading: boolean;
  isError: boolean;
};

export default function Details() {
  const [open, setOpen] = useState<boolean>(false);
  // const handleOpen = () => setOpen(!open);
  // const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const id = path.split("/")[2];
  const email = useAppSelector((state) => state.user.user.email);
  const { data } = useGetSingleBookQuery(id) as MyQueryResult;
  const option = {
    id: id,
    email: email as string,
  };
  const [deletePost] = useDeleteBookMutation();

  const handleDelete = async () => {
    const r = await deletePost(option);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if ("data" in r && !r?.data?.success) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      toast.error(r?.data?.message);
      return;
    }
    toast.success("Book deleted successfully");
    navigate("/");
  };
  console.log(data);
  return (
    
    <div>
      <div className="container mx-auto">
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-5 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap flex-col ">
              <div className="mx-auto lg:w-4/5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <div className="rounded-full	">
                  <img
                    className="w-full h-[300px] rounded-lg"
                    src="https://bookworm.madrasthemes.com/wp-content/uploads/2020/08/12-120x183.jpg"
                    alt="book details image"
                  />
                </div>
                <h2 className="title-font mt-2 text-red-500 tracking-widest">
                  {data?.data.genre}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {data?.data?.title}
                </h1>
                <div  className="flex mb-4">
                  <div className="flex items-center mt-2.5 space-x-3">
                    <h2>{data?.data?.publicationDate}</h2>
                  </div>

                  <div className="ml-auto flex py-5">
                    <Button
                      // eslint-disable-next-line @typescript-eslint/no-misused-promises
                      onClick={() => handleDelete()}
                      size="small"
                      variant="outlined"
                      color="error"
                      sx={{
                        margin:'5px'
                      }}
                      fullWidth
                    >
                      Delete
                    </Button>
                    <Button
                      sx={{
                      margin:'5px'
                    }}
                      size="small"
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => setOpen(!open)}
                    >
                      Edit
                    </Button>
                  </div>

                  <span className=" flex  pl-3 py-2 border-l-2 border-gray-200">
                    <a className="text-gray-500 hover:text-red-500 cursor-pointer m-2">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500 hover:text-red-500 cursor-pointer m-2">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500 hover:text-red-500 cursor-pointer m-2">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                {/* //description */}
                <p className="leading-relaxed text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsam illo amet rem aut fugiat maxime impedit, voluptatum
                  optio numquam dolorem obcaecati animi ea. Hic obcaecati vitae
                  repellendus, nam recusandae corporis eum nisi repellat
                  deleniti inventore saepe sit officia quas laborum. Asperiores
                  fuga ullam illum? Ipsum vitae velit quia inventore deserunt
                  doloribus voluptates asperiores accusantium sint consectetur
                  soluta assumenda minus delectus suscipit beatae explicabo, est
                  quibusdam nostrum. Debitis nihil placeat ut recusandae
                  adipisci, ab consectetur iure consequatur quisquam
                  reprehenderit laudantium neque vitae! Quo, est quisquam nemo
                  sapiente doloremque corrupti ab atque reiciendis ullam
                  deserunt eveniet consequuntur, accusamus quam nam! Odit et
                  dolore deserunt distinctio, commodi ipsa, architecto nulla
                  soluta adipisci incidunt dignissimos quod possimus, fugiat ab
                  iusto accusamus! Ex cum fuga laboriosam ut possimus numquam
                  reiciendis necessitatibus neque ipsa laborum voluptates nam,
                  repellendus suscipit reprehenderit! Tenetur accusantium rem
                  ducimus facere earum quae doloribus deleniti perferendis
                  minima? Vitae aliquam debitis consectetur aspernatur eligendi
                  fugit dicta omnis nemo repellendus eos, totam perspiciatis
                  odio excepturi sint eveniet aliquid. Iste, ducimus aliquam.
                  Expedita a repudiandae minima in error eos? Fuga, repellendus
                  accusantium reprehenderit velit ipsum harum fugit aperiam iste
                  necessitatibus rem perferendis explicabo. Ullam tenetur nihil
                  facilis consequatur? Quo, laborum. Quas laudantium ab vitae
                  est expedita maiores odio enim odit voluptatibus eius totam
                  velit omnis debitis minus quod perspiciatis incidunt dolor
                  eligendi dolorum, hic atque animi. Quasi corporis ut hic
                  reprehenderit molestias modi ipsa deserunt accusamus vero? Ut
                  error fugiat laborum sint, aperiam quas at ducimus tempora,
                  vitae autem veniam distinctio earum harum sit, pariatur
                  temporibus vero a libero explicabo excepturi accusamus?
                  Consequatur, natus praesentium ab cupiditate maiores iusto
                  quod quasi error cumque voluptates labore similique aut
                  distinctio voluptatibus in esse perferendis autem voluptate
                  vero, eum nisi quo earum aliquam. Obcaecati nisi similique
                  mollitia? Est accusamus, impedit necessitatibus soluta, ullam
                  consectetur adipisci quaerat quam asperiores neque maxime
                  numquam illo mollitia eaque doloribus accusantium debitis
                  consequatur perspiciatis inventore totam? Fuga perferendis,
                  omnis exercitationem sit similique saepe ab doloribus
                  repudiandae itaque aut? Dolore aspernatur vitae voluptatibus
                  est error soluta maiores? Assumenda quos quod iure sit?
                  Distinctio fugit expedita vero delectus adipisci quod modi,
                  temporibus minus reiciendis officiis, illum odio quia, totam
                  ullam! Quos quas, qui hic expedita facere, eligendi autem
                  debitis vitae saepe, recusandae at eius itaque praesentium
                  dolores excepturi aut exercitationem ad! Vel iusto animi hic
                  facere ad. Quisquam ipsam provident praesentium culpa officia.
                  Earum, perspiciatis? Ipsam ut esse reiciendis expedita facere
                  accusamus ipsum quod, vel provident quos iusto, ullam numquam
                  dolore doloribus eum quibusdam voluptatem similique id minima!
                  Nemo molestias a, saepe perspiciatis cupiditate impedit, omnis
                  minus, maxime libero consequatur repellat quae quidem? Dolore
                  cupiditate dolores pariatur labore in? Harum ut est delectus,
                  aut earum nihil distinctio cupiditate sunt maxime culpa
                  aliquid? Omnis quod consequuntur id, nihil a vero eum
                  voluptatem placeat nam dignissimos. Nobis, excepturi! Nam
                  ratione cum eum? Quis, dignissimos laborum animi blanditiis
                  vero nam dolor tempore ad, nobis accusamus nesciunt similique.
                  Sunt quae cumque reprehenderit suscipit et delectus
                  consequatur nam dolor cupiditate repellat provident, itaque
                  quibusdam ullam amet modi alias necessitatibus doloribus!
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    price
                  </span>

                  <div className="ml-auto flex items-center">
                    <BsFillCartCheckFill />
                    <button className="rounded-full hover:text-red-500 w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <Link to={"/allbook"} aria-label="Button for product page">                
                  Back
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <UpdateModal open={open} book={data?.data}  setOpen={setOpen}/>
    </div>
  );
}
