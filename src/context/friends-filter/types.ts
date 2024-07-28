import { FriendUser } from "../../classes/FriendUser";
import type {
  Friend,
  Lift,
  Uid,
  UserData,
  WorkoutData,
} from "../../API/User/types";

export const initActionType = "INIT";
export const setFriendActionType = "SET_FRIEND";
export const filterFavActionType = "FILTER_FAV";
export const sortFriendsActionType = "SORT_FRIENDS";
export const resetFiltersActionType = "RESET_FILTERS";
export const searchFriendActionType = "SEARCH_FRIENDS";

export type Action =
  | { type: typeof filterFavActionType }
  | { type: typeof resetFiltersActionType }
  | { type: typeof initActionType; payload: Friend[] }
  | { type: typeof setFriendActionType; payload: UserData }
  | { type: typeof sortFriendsActionType; payload: Sorted }
  | { type: typeof searchFriendActionType; payload: string };

export type Sorted = { by: Lift; order: Order };

export interface State {
  search: string;
  filtredFavs: boolean;
  workouts: WorkoutData[];
  sorted: Sorted | undefined;
  filtredFriends: Friend[] | undefined;
  friends: Record<string, FriendUser> | undefined;
}

export type IFilterFriendsContext = {
  state: State;
  resetFilters: () => void;
  toggleFilterFavs: () => void;
  init: (list: Friend[]) => void;
  sortFriends: (lift: Lift) => void;
  searchFriends: (input: string) => void;
  setFriend: (friend: UserData) => void;
  getFriend: (uid: Uid) => FriendUser | undefined;
};
