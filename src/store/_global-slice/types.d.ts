export type GlobalSlice = {
  theme: Theme;
  inProgress: boolean;
  isOnline: Boolean | undefined;
};

export type ToggleThemeAction = GlobalSlice["theme"];
export type SetOnlineStatusAction = GlobalSlice["isOnline"];
export type ToggleInProgressAction = GlobalSlice["inProgress"] | undefined;
