import * as T from "./types";
import { createContext, useReducer } from "react";
import reducer, { initialState } from "./_reducer";
import { Friend, Lift, Uid, UserData } from "../../API/User";

//////////////////////////////////////////////////////////////////

const FilterFriendsContext = createContext<T.IFilterFriendsContext>({
  state: initialState,
  init: ([]) => {},
  setFriend: () => {},
  sortFriends: () => {},
  resetFilters: () => {},
  searchFriends: () => {},
  getFriend: () => undefined,
  toggleFilterFavs: () => {},
});

export const FilterFriendsContextProvider: React.FC<IContextProvider> = (
  props
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function init(list: Friend[]) {
    dispatch({ type: T.initActionType, payload: list });
  }

  function setFriend(friendData: UserData) {
    dispatch({ type: T.setFriendActionType, payload: friendData });
  }

  function searchFriends(input: string) {
    dispatch({ type: T.searchFriendActionType, payload: input });
  }

  function sortFriends(lift: Lift) {
    const toggleTo = state.sorted?.order === "sortUp" ? "sortDown" : "sortUp";

    dispatch({
      type: T.sortFriendsActionType,
      payload: { by: lift, order: toggleTo },
    });
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
    init,
    getFriend,
    setFriend,
    sortFriends,
    resetFilters,
    searchFriends,
    toggleFilterFavs,
  };

  return (
    <FilterFriendsContext.Provider value={value}>
      {props.children}
    </FilterFriendsContext.Provider>
  );
};

export default FilterFriendsContext;
