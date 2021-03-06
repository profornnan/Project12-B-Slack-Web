import {
  ModalState,
  ModalTypes,
  CREATE_MODAL_OPEN,
  CREATE_MODAL_CLOSE,
  CHANNEL_MODAL_OPEN,
  CHANNEL_MODAL_CLOSE,
  USERBOX_MODAL_OPEN,
  USERBOX_MODAL_CLOSE,
  PROFILE_MODAL_OPEN,
  PROFILE_MODAL_CLOSE,
  EMOJI_PICKER_CLOSE,
  EMOJI_PICKER_OPEN
} from '@store/types/modal-types';
import { ChatType } from '@constants/index';

const initialState: ModalState = {
  createModal: { isOpen: false },
  channelModal: { isOpen: false, x: 0, y: 0 },
  userboxModal: { isOpen: false },
  profileModal: { isOpen: false, x: 0, y: 0, userId: 0, profileUri: '', displayName: '' },
  emojiPicker: { isOpen: false, x: 0, y: 0, chatId: null, type: ChatType.Message }
};

const ModalReducer = (state = initialState, action: ModalTypes) => {
  switch (action.type) {
    case CREATE_MODAL_OPEN:
      return { ...state, createModal: { isOpen: true }, channelModal: { isOpen: false } };
    case CREATE_MODAL_CLOSE:
      return { ...state, createModal: { isOpen: false } };
    case CHANNEL_MODAL_OPEN: {
      const { x, y } = action.payload;
      return { ...state, channelModal: { isOpen: true, x, y } };
    }
    case CHANNEL_MODAL_CLOSE:
      return { ...state, channelModal: { isOpen: false } };
    case USERBOX_MODAL_OPEN:
      return { ...state, userboxModal: { isOpen: true } };
    case USERBOX_MODAL_CLOSE:
      return { ...state, userboxModal: { isOpen: false } };
    case PROFILE_MODAL_OPEN: {
      const { x, y, userId, profileUri, displayName } = action.payload;
      return { ...state, profileModal: { isOpen: true, x, y, userId, profileUri, displayName } };
    }
    case PROFILE_MODAL_CLOSE:
      return { ...state, profileModal: { isOpen: false } };
    case EMOJI_PICKER_OPEN: {
      const { x, y, chatId, type } = action.payload;
      return { ...state, emojiPicker: { isOpen: true, x, y, chatId, type } };
    }
    case EMOJI_PICKER_CLOSE:
      return { ...state, emojiPicker: { isOpen: false } };
    default:
      return state;
  }
};

export default ModalReducer;
