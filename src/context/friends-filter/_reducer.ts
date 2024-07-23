import { Workout } from "../../API/User";
import { compareStrings } from "../../helpers/functions/functions";
import {
  Action,
  FiltredFriend,
  Friend,
  State,
  filterFavActionType,
  initFriendsActionType,
  resetFiltersActionType,
  searchFriendActionType,
  setFriendActionType,
} from "./types";

export const initialState: State = {
  workouts: [],
  searchPhraze: "",
  filtredFavs: false,
  friends: undefined,
  filtredFriends: undefined,
};

// HELPERS
function _filterFriendsBySearch(state: State, searchPhraze: string): Friend[] {
  const filtred = state.friends?.filter(({ data: { base } }) =>
    compareStrings(searchPhraze, [base.nickname, base.email])
  );
  return filtred || [];
}

function _filterFavFriends(friends: Friend[]): Friend[] {
  return friends?.filter(({ isFav }) => isFav === true);
}

function convertFriendsToFiltred(friends: Friend[]): FiltredFriend[] {
  return friends.map(({ uid, isFav }) => {
    return { isFav, uid };
  });
}

function _extractFriendsWorkouts(friends: Friend[]): Workout[] {
  const friendsWorkouts: Workout[] = [];
  friends.forEach(({ data: { details } }) => {
    const workouts = details?.workouts;
    if (workouts) friendsWorkouts.push(...workouts);
  });
  return friendsWorkouts;
}

////////////////////////////////////////////////////////////////

/////////////REDUCER/////////////

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case initFriendsActionType: {
      const filtredFriends = action.payload;
      const friends = filtredFriends.length ? state.friends : undefined;
      return { ...state, filtredFriends, friends };
    }

    case resetFiltersActionType: {
      const friends = state.friends || [];
      const workouts = _extractFriendsWorkouts(friends);
      const filtredFriends = convertFriendsToFiltred(friends || []);

      return {
        ...state,
        searchPhraze: "",
        filtredFriends,
        filtredFavs: false,
        workouts,
      };
    }

    case setFriendActionType: {
      const friend = action.payload;
      const { friends, workouts } = state;
      if (friends?.some((f) => f.uid === friend.uid)) return state;
      const friendsWorkouts = friend.data.details?.workouts || [];
      const updatedFriends = [...(friends || []), friend];
      const updateWorkouts = [...workouts, ...friendsWorkouts];
      return { ...state, friends: updatedFriends, workouts: updateWorkouts };
    }

    case searchFriendActionType: {
      const { filtredFavs } = state;
      const searchPhraze = action.payload;
      let searchedFriends = _filterFriendsBySearch(state, searchPhraze);
      if (filtredFavs) searchedFriends = _filterFavFriends(searchedFriends);
      const workouts = _extractFriendsWorkouts(searchedFriends);
      const filtredFriends = convertFriendsToFiltred(searchedFriends);
      return { ...state, filtredFriends, searchPhraze, workouts };
    }

    case filterFavActionType: {
      const { searchPhraze, filtredFavs } = state;
      const condition = !filtredFavs;

      const searchedFriends = _filterFriendsBySearch(state, searchPhraze);

      const searchedFavFriends = condition
        ? _filterFavFriends(searchedFriends)
        : searchedFriends;

      const workouts = _extractFriendsWorkouts(searchedFavFriends);
      const filtredFriends = convertFriendsToFiltred(searchedFavFriends);

      return { ...state, filtredFriends, workouts, filtredFavs: condition };
    }

    default:
      return state;
  }
}

export default reducer;
