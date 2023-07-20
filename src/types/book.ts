export type IBook = {
    
    title: string;
    author: string;
    genre: string
    publicationDate: string;
    reviews: [string];
    email: string;
    image:string;

    createdAt: string;
    updatedAt: string;
    _id: string;


}

export type IBookPostData = {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    reviews?: [string];
    email: string;
    image: string;
}