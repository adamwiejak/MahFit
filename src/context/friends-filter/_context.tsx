import { createContext, useReducer } from "react";
import reducer, { initialState } from "./_reducer";
import {
  filterFavActionType,
  initFriendsActionType,
  resetFiltersActionType,
  searchFriendActionType,
  setFriendActionType,
} from "./types";
import {
  type FiltredFriend,
  type Friend,
  type IFilterFriendsContext,
  type Uid,
} from "./types";

//////////////////////////////////////////////////////////////////

export const FilterFriendsContext = createContext<IFilterFriendsContext>({
  state: initialState,
  setFriend: () => {},
  initFriends: () => {},
  resetFilters: () => {},
  searchFriends: () => {},
  toggleFilterFavs: () => {},
  getFriendData: () => undefined,
});

export const FilterFriendsContextProvider: React.FC<IContextProvider> = (
  props
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function initFriends(list: FiltredFriend[]) {
    dispatch({ type: initFriendsActionType, payload: list });
  }

  function setFriend(friend: Friend) {
    dispatch({ type: setFriendActionType, payload: friend });
  }

  function searchFriends(input: string) {
    dispatch({ type: searchFriendActionType, payload: input });
  }

  function toggleFilterFavs() {
    dispatch({ type: filterFavActionType });
  }

  function resetFilters() {
    dispatch({ type: resetFiltersActionType });
  }

  function getFriendData(uid: Uid) {
    return state.friends?.find((f) => f.uid === uid);
  }

  const value = {
    state,
    setFriend,
    initFriends,
    resetFilters,
    searchFriends,
    getFriendData,
    toggleFilterFavs,
  };

  return (
    <FilterFriendsContext.Provider value={value}>
      {props.children}
    </FilterFriendsContext.Provider>
  );
};

export default FilterFriendsContextProvider;
