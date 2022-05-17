import { instance } from "./instance";

export let getDefaultProducts = [];

export function getHundredProducts() {
  return instance.get(`?page=1&limit=100`).then((res) => {
    return getDefaultProducts = res.data.rows;
  });
}
