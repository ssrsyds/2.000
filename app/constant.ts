export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=-2hOLfJAjw-w48dddpiWC5s41CrKr1be&authKey=xonVSvEmcS70vAHiy%2BWHAFI%2FjLMUEL3JFS0H%2FtC7APz19XIZ1hEEadWK2fKincE3&noverify=0&group_code=687146861`;
export const ISSUE_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=-2hOLfJAjw-w48dddpiWC5s41CrKr1be&authKey=xonVSvEmcS70vAHiy%2BWHAFI%2FjLMUEL3JFS0H%2FtC7APz19XIZ1hEEadWK2fKincE3&noverify=0&group_code=687146861`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const FETCH_COMMIT_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=-2hOLfJAjw-w48dddpiWC5s41CrKr1be&authKey=xonVSvEmcS70vAHiy%2BWHAFI%2FjLMUEL3JFS0H%2FtC7APz19XIZ1hEEadWK2fKincE3&noverify=0&group_code=687146861`;
export const FETCH_TAG_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=-2hOLfJAjw-w48dddpiWC5s41CrKr1be&authKey=xonVSvEmcS70vAHiy%2BWHAFI%2FjLMUEL3JFS0H%2FtC7APz19XIZ1hEEadWK2fKincE3&noverify=0&group_code=687146861`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "ak-";

export const LAST_INPUT_KEY = "last-input";

export const REQUEST_TIMEOUT_MS = 60000;
