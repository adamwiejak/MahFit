export type GlobalSlice = {
  inProgress: boolean;
  isOnline: Boolean | undefined;
  theme: "light" | "dark" | undefined;
};

export type SetOnlineStatusAction = PayloadAction<GlobalSlice["isOnline"]>;
export type SetInProgressAction = PayloadAction<GlobalSlice["inProgress"]>;
export type ToggleThemeAction = PayloadAction<GlobalSlice["theme"]>;
