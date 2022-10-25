import { NameUrl } from "../common/NameUrl.type";

export type PokedexListType = {
    count: number;
    next: string | null;
    previous : string | null;
    results: Array<NameUrl>;
}