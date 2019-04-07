/// ref : node_modules/element-ui/types/message-box.d.ts
export interface IElementConfirm {
  (message: string, title: string, options?: any): Promise<any>;
  (message: string, options?: any): Promise<any>;
}

export interface IElementMessage {
  (options?: any): Promise<any>;
}
