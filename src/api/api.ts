import { keyIsLink } from "key-is-link";
import type { MyLink } from "./typelink";
import type { AxiosRequestConfig } from "axios";
import { requestFn } from "./reqfn";

export const myApi = keyIsLink<MyLink, AxiosRequestConfig>(requestFn);
