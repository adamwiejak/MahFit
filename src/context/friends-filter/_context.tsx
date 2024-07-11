import UserAPI, { UserBaseInfo, UserDetailsInfo } from "../../API/User";
import { createContext, useReducer } from "react";
import reducer, { initialState } from "./_reducer";
import type { IFilterFriendsContext } from "./types";

//////////////////////////////////////////////////////////////////

export const FilterFriendsContext = createContext<IFilterFriendsContext>({
  state: initialState,
  filterFav: () => {},
  getFriend: () => null,
  searchFriends: () => {},
  setFriendsList: () => {},
});

export const FilterFriendsContextProvider: React.FC<IContextProvider> = (
  props
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setFriendsList(list: UserDetailsInfo["friendsList"]) {
    dispatch({ type: "SET_FRIENDS_LIST", payload: list });
  }

  async function getFriend(uid: UserBaseInfo["uid"]) {
    const { friends } = state;
    const friend = friends.find((f) => f.base.uid === uid);
    if (friend) return friend;

    try {
      // FIXME: unite dummy-users and users by add isDummyy prop to User interface
      const user = await UserAPI.getUserFromDB(uid);
      console.log(user);
      dispatch({ type: "SET_FRIEND", payload: user });
    } catch (err) {
      console.log(err);
    }
  }

  function searchFriends(input: string) {
    dispatch({ type: "SEARCH_FRIENDS", payload: input });
  }

  function filterFav(toggleTo: boolean) {
    dispatch({ type: "FILTER_FAV", payload: toggleTo });
  }

  const value = {
    state,
    searchFriends,
    filterFav,
    getFriend,
    setFriendsList,
  };

  return (
    <FilterFriendsContext.Provider value={value}>
      {props.children}
    </FilterFriendsContext.Provider>
  );
};

export default FilterFriendsContextProvider;
