import { setHeaders, setOnlyAuth } from "../Headers";
const axios = require("axios");
export const createBookmark = async (props) => {
  const data = JSON.stringify({
    url: props.url,
  });
  console.log(props.folderId == "Root");
  console.log(
    "here is createbookmark",
    `${process.env.REACT_APP_URL}/bookmark?folderId=${(props.folderId, "Root")}`
  );
  const temp_config = {
    method: "post",
    url:
      props.folderId != "Root"
        ? `${process.env.REACT_APP_URL}/bookmark?folderId=${props.folderId}`
        : `${process.env.REACT_APP_URL}/bookmark`,
    data: data,
  };

  const config = setHeaders(temp_config);

  const bookmarks = await axios(config);
  console.log(bookmarks);
  return bookmarks.data;
};
export const DeleteBookmark = async (props) => {
  const data = JSON.stringify({
    bookmarkId: props.bookmarkId,
  });
  const temp_config = {
    method: "DELETE",
    url: `${process.env.REACT_APP_URL}/bookmark`,
    data: data,
  };
  const config = setHeaders(temp_config);
  return await axios(config);
};
export const getBookmark = async (props) => {
  console.log("props", props);
  const data = "";
  const temp_config = {
    method: "GET",
    url: `${process.env.REACT_APP_URL}/folder-bookmarks?folderId=${props.payload.folderId}`,
    data: data,
  };
  console.log("folderidinbookmarks", props.payload.folderId);
  const config = setOnlyAuth(temp_config);
  const bookmarks = await axios(config);
  return bookmarks.data;
};
export const getbaseBookmark = async () => {
  const data = "";
  const temp_config = {
    method: "GET",
    url: `${process.env.REACT_APP_URL}/folder-bookmarks`,
    data: data,
  };
  const config = setOnlyAuth(temp_config);
  const bookmarks = await axios(config);
  return bookmarks.data;
};
export const patchBookmark = async (props) => {
  const data = JSON.stringify({
    bookmarkId: props.bookmarkId,
    folderId: props.folderId,
  });
  const temp_config = {
    method: "patch",
    url: `${process.env.REACT_APP_URL}/move-bookmark`,
    data: data,
  };
  const config = setHeaders(temp_config);
  return await axios(config);
};
export const toggleFavBookmark = async (props) => {
  const data = JSON.stringify({
    bookmarkId: props.bookmarkId,
  });
  const temp_config = {
    method: "put",
    url: `${process.env.REACT_APP_URL}/toggle-favorite`,
    data: data,
  };
  const config = setHeaders(temp_config);
  return await axios(config);
};
export const changeDetailsBookmark = async (props) => {
  const data = JSON.stringify({
    bookmarkId: props.bookmarkId,
    name: props.name,
    url: props.url,
  });
  const temp_config = {
    method: "put",
    url: `${process.env.REACT_APP_URL}/update-details`,
    data: data,
  };
  const config = setHeaders(temp_config);
  return await axios(config);
};
