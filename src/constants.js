// RTM API EVENTS:
export const LOGIN = "login";
export const SEND_EVENT = "send_event";

// WEBSOCKET:
export const CONNECT = "connect";
export const DISCONNECT = "disconnect";
export const MESSAGE = "message";

// REQUESTS:
export const replaceRequestError = requestId =>
  `WebSocket request is replaced, id: ${requestId}`;
export const requestTimeoutError = (action, timeout) =>
  `Action: "${action}" was rejected by timeout (${timeout} ms).`;

// ERRORS:
export const API_NOT_READY = "ChatSDK: API is not ready yet";
export const AGENT_NOT_LOGGED_IN =
  "ChatSDK.getAgentDetails: Agent is not logged in yet.";
export const SOCKET_ALREADY_OPEN = "ChatSDK: Socket is already open.";
export const ERROR_INIT_MISSING_CONFIG = "ChatSDK.init: Missing config";
export const ERROR_INIT_MISSING_TOKEN =
  "ChatSDK.init: Incorrect config, missing 'access_token' value";
export const ERROR_METHOD_FACTORY_INCORRECT_PARAMS =
  "ChatSDK.methodFactory: Incorrect requestBody parameter";
export const ERROR_SEND_MESSAGE_MISSING_CHAT_ID =
  "ChatSDK.sendMessage: Missing chat_id param";
