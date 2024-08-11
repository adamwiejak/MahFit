import * as T from "./types";
import { compareStrings } from "../../helpers/functions/functions";
import { Lift } from "../../API/User";
import { FriendUser } from "../../classes/FriendUser";
import { WorkoutData } from "../../utils/Firebase/database";

export const initialState: T.State = {
  friends: {},
  workouts: [],
  isLoading: true,
  searchPhraze: "",
  sorted: undefined,
  filtredFriends: [],
  filtredFavs: false,
};

// HELPERS
function _getFriendsUsersArray(input: T.State["friends"]) {
  return Object.values(input || {});
}

function _getSearchedFriendsUsersArray(state: T.State) {
  const { filtredFriends, friends } = state;
  return filtredFriends?.map(({ uid }) => friends![uid]);
}

function _convertToFriendsList(list: FriendUser[]) {
  return list.map((f) => {
    return { isFav: f.isFav(), uid: f.getUid() };
  });
}

function _extractFriendsWorkouts(friends: FriendUser[]) {
  const workouts: WorkoutData[] = [];
  friends.forEach((f) => workouts.push(...f.getWorkouts()));
  return workouts;
}

function _filterByPhraze(friends: T.State["friends"], phraze: string) {
  return _getFriendsUsersArray(friends).filter((friend) => {
    const { nickname, email } = friend.getUserData().base;
    if (compareStrings(phraze, [nickname, email])) return friend;
  });
}

function _filterFavFriends(list: FriendUser[]) {
  return list?.filter((friend) => friend.isFav());
}

function _sortUp(list: FriendUser[], lift: Lift) {
  list.sort((a, b) => (a.getCurrRecord(lift) || 0) - (b.getCurrRecord(lift) || 0));
}

function _sortDown(list: FriendUser[], lift: Lift) {
  list.sort((a, b) => (b.getCurrRecord(lift) || 0) - (a.getCurrRecord(lift) || 0));
}

////////////////////////////////////////////////////////////////

/////////////REDUCER/////////////
function reducer(state: T.State, action: T.Action): T.State {
  switch (action.type) {
    case T.initActionType: {
      const filtredFriends = action.payload;
      return { ...state, filtredFriends, isLoading: false };
    }

    case T.setFriendActionType: {
      const friend = action.payload;
      const { friends, workouts } = state;
      const uid = friend.getUid();
      if (friends?.[uid]) return state;
      const updateWorkouts = [...workouts, ...friend.getWorkouts()];
      const updatedFriends = { ...friends, [uid]: friend };
      return { ...state, friends: updatedFriends, workouts: updateWorkouts };
    }

    case T.searchFriendActionType: {
      const { friends, filtredFavs } = state;
      const searchPhraze = action.payload;
      let searchedFriends = _filterByPhraze(friends, searchPhraze);
      if (filtredFavs) searchedFriends = _filterFavFriends(searchedFriends);
      const workouts = _extractFriendsWorkouts(searchedFriends);
      const filtredFriends = _convertToFriendsList(searchedFriends);
      return { ...state, workouts, searchPhraze, filtredFriends };
    }

    case T.filterFavActionType: {
      const { searchPhraze, filtredFavs, friends, sorted } = state;
      const condition = !filtredFavs;

      let searched = searchPhraze ? _filterByPhraze(friends, searchPhraze) : _getFriendsUsersArray(friends);

      if (condition) searched = _filterFavFriends(searched);
      if (sorted?.order === "sortUp") _sortUp(searched, sorted.lift);
      if (sorted?.order === "sortDown") _sortDown(searched, sorted.lift);

      const workouts = _extractFriendsWorkouts(searched);
      const filtredFriends = _convertToFriendsList(searched);

      return { ...state, filtredFriends, workouts, filtredFavs: condition };
    }

    case T.sortFriendsActionType: {
      const lift = action.payload;
      const { sorted } = state;
      const order = sorted?.order === "sortUp" ? "sortDown" : "sortUp";

      const sortedFriends = _getSearchedFriendsUsersArray(state);
      if (!sortedFriends) return state;
      if (order === "sortUp") _sortUp(sortedFriends, lift);
      if (order === "sortDown") _sortDown(sortedFriends, lift);

      return {
        ...state,
        sorted: { lift, order },
        filtredFriends: _convertToFriendsList(sortedFriends),
      };
    }

    case T.resetFiltersActionType: {
      const friendsUsers = _getFriendsUsersArray(state.friends);
      const workouts = _extractFriendsWorkouts(friendsUsers);
      const filtredFriends = _convertToFriendsList(friendsUsers);
      return {
        ...state,
        workouts,
        filtredFriends,
        searchPhraze: "",
        sorted: undefined,
        filtredFavs: false,
      };
    }

    default:
      return state;
  }
}

export default reducer;
