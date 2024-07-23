import { User, UserBaseInfo, UserDetailsInfo, Workout } from "../../API/User";

export const filterFavActionType = "FILTER_FAV";
export const resetFiltersActionType = "RESET_FILTERS";
export const setFriendActionType = "SET_FRIEND";
export const initFriendsActionType = "INIT_FRIENDS";
export const searchFriendActionType = "SEARCH_FRIENDS";

export type Action =
  | { type: typeof filterFavActionType }
  | { type: typeof resetFiltersActionType }
  | { type: typeof setFriendActionType; payload: Friend }
  | { type: typeof searchFriendActionType; payload: string }
  | { type: typeof initFriendsActionType; payload: FiltredFriend[] };

export type Uid = UserBaseInfo["uid"];
export type Friend = FiltredFriend & { data: User };
export type FiltredFriend = { uid: Uid; isFav: boolean };

export interface State {
  workouts: Workout[];
  filtredFavs: boolean;
  searchPhraze: string;
  friends: Friend[] | undefined;
  filtredFriends: FiltredFriend[] | undefined;
}

export type IFilterFriendsContext = {
  state: State;
  resetFilters: () => void;
  toggleFilterFavs: () => void;
  setFriend: (friend: Friend) => void;
  searchFriends: (input: string) => void;
  initFriends: (list: FiltredFriend[]) => void;
  getFriendData: (uid: Uid) => Friend | undefined;
};
