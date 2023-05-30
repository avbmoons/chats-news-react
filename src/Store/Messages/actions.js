import { v4 as uuidv4 } from "uuid";
import { ADD_MESSAGE } from "./constants";
import { DELETE_MESSAGES } from "./constants";
import { AUTHORS } from "../../utils/constants";

export const addMessage = (newMessage, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    message: newMessage,
    chatId,
  },
});

export const deleteMessage = (messageId, chatId) => ({
  type: DELETE_MESSAGES,
  payload: {
    messageId: messageId,
    chatId,
  },
});

let timeout;

export const addMessageWithReply = (newMessage, chatId) => (dispatch) => {
  dispatch(addMessage(newMessage, chatId));

  if (timeout) {
    clearTimeout(timeout);
  }

  if (newMessage.author !== AUTHORS.BOT) {
    timeout = setTimeout(() => {
      dispatch(
        addMessage(
          {
            id: uuidv4(),
            author: AUTHORS.BOT,
            text: "Thanks! So, lets keep...",
          },
          chatId
        )
      );
    }, 1500);
  }
};
