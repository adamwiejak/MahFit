import { Action, State } from "./types";

export const initialState: State = {
  friends: [],
  filtredFriends: [],
  friendsList: undefined,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_FRIENDS_LIST": {
      return { ...state, friendsList: action.payload };
    }

    case "SET_FRIEND": {
      const u = action.payload;
      const { friends, friendsList } = state;
      if (friends.some((f) => f.base.uid === u.base.uid)) return state;

      const isFav = friendsList!.find((f) => f.uid === u.base.uid)?.isFav;
      return { ...state, friends: [...friends, { ...u, isFav: !!isFav }] };
    }

    case "SEARCH_FRIENDS": {
      const input = action.payload;
      const filtredFriends = state.filtredFriends.filter((user) =>
        user.base.nickname.toLowerCase().includes(input.toLowerCase())
      );

      return { ...state, filtredFriends };
    }

    case "FILTER_FAV": {
      const toggleTo = action.payload;
      // TODO:
      return { ...state };
    }

    default:
      return state;
  }
}

export default reducer;
