import { User, UserDetailsInfo } from "../../API/User";

export type Friend = User & {
  isFav: boolean;
};

export interface State {
  friends: Friend[];
  filtredFriends: Friend[];
  friendsList: UserDetailsInfo["friendsList"] | undefined;
}

export type IFilterFriendsContext = {
  state: State;
  searchFriends: (input: string) => void;
  filterFav: (toggleTo: boolean) => void;
  getFriend: (input: string) => Friend | null;
  setFriendsList: (list: State["friendsList"]) => void;
};

export type Action =
  | { type: "SET_FRIEND"; payload: User }
  | { type: "FILTER_FAV"; payload: boolean }
  | { type: "SEARCH_FRIENDS"; payload: string }
  | { type: "SET_FRIENDS_LIST"; payload: State["friendsList"] };
