import { Route } from "@typescript/types";
import { navLinkDatas } from "@datas/navLinkDatas";

export const routes: Route[] = navLinkDatas.map((navLink) => ({
  path: navLink.link,
  title: navLink.title,
}));
