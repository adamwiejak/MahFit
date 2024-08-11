import { FriendUser } from "../../classes/FriendUser";
import type { Friend, Lift, Uid } from "../../API/User";
import { WorkoutData } from "../../utils/Firebase/database";

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
  | { type: typeof sortFriendsActionType; payload: Lift }
  | { type: typeof setFriendActionType; payload: FriendUser }
  | { type: typeof searchFriendActionType; payload: string };

export type Sorted = { lift: Lift; order: "sortDown" | "sortUp" | undefined };

// REDUCER STATE
export interface State {
  isLoading: boolean;
  searchPhraze: string;
  filtredFavs: boolean;
  workouts: WorkoutData[];
  sorted: Sorted | undefined;
  filtredFriends: Friend[] | undefined;
  friends: Record<string, FriendUser> | undefined;
}

// CONTEXT VALUE
export type IFilterFriendsContext = {
  state: State;
  resetFilters: () => void;
  toggleFilterFavs: () => void;
  sortFriends: (lift: Lift) => void;
  searchFriends: (input: string) => void;
  setFriend: (friend: FriendUser) => void;
  getFriend: (uid: Uid) => FriendUser | undefined;
};
