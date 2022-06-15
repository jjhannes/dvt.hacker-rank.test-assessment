import { ITrack } from "./itrack";

export interface ISearchResult {
    data: ITrack[];
    total: number;
    next: string;
    previous: string;
}
