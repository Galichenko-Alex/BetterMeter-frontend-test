interface UserStateI {
  fullName: string;
  avatarURL: string;
  notifications: number;
}

const initialState: UserStateI = {
  fullName: 'Adrian Villa',
  avatarURL: './avatar.jpg',
  notifications: 9,
};

export const STATE_KEY = 'user';

export const userReducer = (state = initialState, { type, payload }: Record<string, any>): UserStateI => {
  switch (type) {
    default:
      return state;
  }
};

interface PredictedStateI {
  [STATE_KEY]: UserStateI;
}

export const selectFullName = (state: PredictedStateI) => state[STATE_KEY].fullName;

export const selectAvatarURL = (state: PredictedStateI) => state[STATE_KEY].avatarURL;
export const selectNotifications = (state: PredictedStateI) => state[STATE_KEY].notifications;
