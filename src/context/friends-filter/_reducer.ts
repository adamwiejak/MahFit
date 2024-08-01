import * as T from "./types";
import { compareStrings } from "../../helpers/functions/functions";
import { WorkoutData } from "../../API/User";
import { FriendUser } from "../../classes/FriendUser";

export const initialState: T.State = {
  workouts: [],
  search: "",
  sorted: undefined,
  filtredFavs: false,
  friends: undefined,
  filtredFriends: undefined,
};

type FriendsInput = T.State["friends"] | FriendUser[];

// HELPERS
function _convertFriendsToArray(input: FriendsInput) {
  return Array.isArray(input) ? [...input] : Object.values(input || {});
}

function _filterByPhraze(list: FriendsInput, phraze: string) {
  const friends = _convertFriendsToArray(list);
  return friends.filter((friend) => {
    const { nickname, email } = friend.getUserData().base;
    if (compareStrings(phraze, [nickname, email])) return friend;
  });
}

function _filterFavFriends(list: FriendsInput) {
  const arrayList = _convertFriendsToArray(list);
  return arrayList?.filter(({ isFav }) => isFav === true);
}

function _extractFriendsWorkouts(list: FriendsInput) {
  const workouts: WorkoutData[] = [];
  const friends = Array.isArray(list) ? list : Object.values(list || {});
  friends.forEach((f) => workouts.push(...f.getWorkouts()));
  return workouts;
}

function _convertFriendsUsersToFriends(list: FriendsInput) {
  const friendsArray = _convertFriendsToArray(list);
  return friendsArray.map((f) => {
    return { isFav: f.getIsFav(), uid: f.getUid() };
  });
}

////////////////////////////////////////////////////////////////

/////////////REDUCER/////////////
function reducer(state: T.State, action: T.Action): T.State {
  switch (action.type) {
    case T.initActionType: {
      const filtredFriends = action.payload;
      const friends = filtredFriends.length ? {} : undefined;
      return { ...state, filtredFriends, friends };
    }

    case T.setFriendActionType: {
      const friendData = action.payload;
      const uid = friendData.base.uid;
      const { friends, workouts } = state;
      if (friends?.[uid]) return state;

      const isFav = !!state.filtredFriends?.find((f) => f.uid === uid)?.isFav;
      const friend = new FriendUser(friendData, isFav);
      const updateWorkouts = [...workouts, ...friend.getWorkouts()];
      const updatedFriends = { ...friends, [uid]: friend };
      return { ...state, friends: updatedFriends, workouts: updateWorkouts };
    }

    case T.searchFriendActionType: {
      const search = action.payload;
      const { filtredFavs, friends } = state;
      let searchedFriends = _filterByPhraze(friends, search);
      if (filtredFavs) searchedFriends = _filterFavFriends(searchedFriends);
      const workouts = _extractFriendsWorkouts(searchedFriends);
      const filtredFriends = _convertFriendsUsersToFriends(searchedFriends);
      return { ...state, workouts, search, filtredFriends };
    }

    case T.filterFavActionType: {
      const { search, filtredFavs, friends } = state;
      const condition = !filtredFavs;
      const searched = search ? _filterByPhraze(friends, search) : friends;
      const filterByFav = condition ? _filterFavFriends(searched) : searched;
      const workouts = _extractFriendsWorkouts(filterByFav);
      const filtredFriends = _convertFriendsUsersToFriends(filterByFav);
      return { ...state, filtredFriends, workouts, filtredFavs: condition };
    }

    case T.sortFriendsActionType: {
      const sorted = action.payload;
      const { by, order } = sorted;
      const filtredFriends = [...(state.filtredFriends || [])];

      // TODO:
      // if (order === "sortDown") filtredFriends.sort((a, b) => a - b);
      // if (order === "sortDown") filtredFriends.sort((a, b) => b - a);

      return { ...state, sorted, filtredFriends };
    }

    case T.resetFiltersActionType: {
      const friends = state.friends;
      const workouts = _extractFriendsWorkouts(friends);
      const filtredFriends = _convertFriendsUsersToFriends(friends || []);
      return {
        ...state,
        search: "",
        workouts,
        filtredFriends,
        sorted: undefined,
        filtredFavs: false,
      };
    }

    default:
      return state;
  }
}

export default reducer;
