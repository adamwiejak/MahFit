import * as T from "./types";
import { createContext, useEffect, useReducer } from "react";
import reducer, { initialState } from "./_reducer";
import { Friend, Lift, Uid } from "../../API/User";
import { FriendUser } from "../../classes/FriendUser";

//////////////////////////////////////////////////////////////////

const FilterFriendsContext = createContext<T.IFilterFriendsContext>({
  state: initialState,
  setFriend: () => {},
  sortFriends: () => {},
  resetFilters: () => {},
  searchFriends: () => {},
  getFriend: () => undefined,
  toggleFilterFavs: () => {},
});

interface IFriendsFillterContext {
  friendsList?: Friend[];
  children: JSX.Element | JSX.Element[];
}

export const FilterFriendsContextProvider: React.FC<IFriendsFillterContext> = (props) => {
  const { friendsList = [], children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  // initiate the list
  useEffect(() => {
    dispatch({ type: T.initActionType, payload: friendsList });
  }, [friendsList]);
  ///////

  function setFriend(friendData: FriendUser) {
    dispatch({ type: T.setFriendActionType, payload: friendData });
  }

  function searchFriends(input: string) {
    dispatch({ type: T.searchFriendActionType, payload: input });
  }

  function sortFriends(lift: Lift) {
    dispatch({ type: T.sortFriendsActionType, payload: lift });
  }

  function toggleFilterFavs() {
    dispatch({ type: T.filterFavActionType });
  }

  function resetFilters() {
    dispatch({ type: T.resetFiltersActionType });
  }

  function getFriend(uid: Uid) {
    return state.friends?.[uid];
  }

  const value = {
    state,
    getFriend,
    setFriend,
    sortFriends,
    resetFilters,
    searchFriends,
    toggleFilterFavs,
  };

  return <FilterFriendsContext.Provider value={value}>{children}</FilterFriendsContext.Provider>;
};

export default FilterFriendsContext;
