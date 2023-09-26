export const searchIconStyle = (query: string, option: string): string => {
    if (option === "close") {
      return `mr-5 ${
        query ? "" : "hidden"
      } text-xl cursor-pointer hover:text-[#f75454] absolute right-0`;
    }
    if (option === "search") {
      return `mr-5 ${
        query ? "hidden" : ""
      } text-xl cursor-pointer hover:text-[#f75454] absolute right-0`;
    }
    return "";
  };