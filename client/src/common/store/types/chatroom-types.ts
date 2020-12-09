export const LOAD = 'LOAD';
export const LOAD_ASYNC = 'LOAD_ASYNC';
export const INIT_SIDEBAR = 'INIT_SIDEBAR';
export const INIT_SIDEBAR_ASYNC = 'INIT_SIDEBAR_ASYNC';
export const PICK_CHANNEL = 'PICK_CHANNEL';
export const PICK_CHANNEL_ASYNC = 'PICK_CHANNEL_ASYNC';
export const INSERT_MESSAGE = 'INSERT_MESSAGE';

export interface selectedChatroomState {
  chatType: string;
  description?: string;
  isPrivate: boolean;
  title: string;
  topic?: string;
  userCount: number;
  users: Array<object>;
}

export interface chatroomState {
  selectedChatroom: selectedChatroomState;
  messages: Array<object>;
  starred: Array<object>;
  otherSections: Array<object>;
  channels: Array<object>;
  directMessages: Array<object>;
  selectedChatroomId: number | null;
}

export interface sidebarState {
  starred: Array<object>;
  otherSections: Array<object>;
  channels: Array<object>;
  directMessages: Array<object>;
  selectedChatroomId: number | null;
}

export interface channelState {
  chatroom: selectedChatroomState;
  messages: Array<object>;
  selectedChatroomId: number;
}

export interface messageState {
  message: Object;
}

interface LoadChatroomAction {
  type: typeof LOAD;
  payload: chatroomState;
}

interface InitSidebarAction {
  type: typeof INIT_SIDEBAR;
  payload: sidebarState;
}

interface PickChannelAction {
  type: typeof PICK_CHANNEL;
  payload: channelState;
}

interface InsertMessageAction {
  type: typeof INSERT_MESSAGE;
  payload: messageState;
}

export type ChatroomTypes = LoadChatroomAction | InitSidebarAction | PickChannelAction | InsertMessageAction;
