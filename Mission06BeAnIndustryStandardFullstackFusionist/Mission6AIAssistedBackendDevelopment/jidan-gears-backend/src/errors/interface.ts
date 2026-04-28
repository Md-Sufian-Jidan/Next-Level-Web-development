export type TErrorSource = {
  path: string | number;
  message: string;
};

export type TGenericErrorResponse = {
  statusCode?: number;
  success: boolean;
  message: string;
  errorSources: TErrorSource[];
  stack?: string;
  error?: unknown;
};
