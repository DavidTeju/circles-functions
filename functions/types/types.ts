import {paths} from "./schema";


export type pathsType = paths

export type pathRoute = keyof pathsType

export type pathMethod = keyof pathsType[pathRoute]

export type hey = pathMethod["/circles/{username}/feed"];
