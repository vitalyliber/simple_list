import axios from "axios";
export default async function (url) {
  return axios({
    method: "get",
    url,
  }).then(({ data }) => {
    return data;
  });
}
