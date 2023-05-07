import {
  AxiosHeaderValue,
  AxiosResponse,
  AxiosResponseHeaders,
  InternalAxiosRequestConfig,
  RawAxiosResponseHeaders,
} from "axios";

enum SaxiosResponseTypes {
  Buffer = "arrayBuffer",
  BinaryLargeObject = "blob",
  Document = "document",
  JavascriptObjectNotation = "json",
  Text = "text",
}

type SaxiosDefaultOptions = {};

type SaxiosRequestConfig = {
  /**
   * The format (type) of the response
   */
  responseType?: SaxiosResponseTypes;
  /**
   * Specifies whether the url should include the baseurl or not
   */
  useBaseurl?: boolean;
};

type SaxiosOptions = {
  defaults: SaxiosDefaultOptions;
};

//#region SaxiosResponse
type SaxiosResponse<DataType = any> = {
  /**
   * The data from the response
   */
  data: DataType;
  /**
   * The status of the response
   */
  status: SaxiosResponseStatus;
  /**
   * The given headers of the response
   */
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  /**
   * The config of the request from which this response was created
   */
  config: InternalAxiosRequestConfig;
  /**
   * The axios response
   */
  axiosResponse: AxiosResponse;
  /**
   * The request from which this response was created
   */
  request?: any;
};
type SaxiosResponseStatus = {
  /**
   * The response status code (404, 200, etc)
   */
  code: number;
  /**
   * The name of the response status
   */
  name: string;
};
//#endregion SaxiosResponse

//#region Function options
//#region SaxiosRequestOptions
type SaxiosRequestOptions = {
  /**
   * The type of the request
   */
  type: RequestTypes;
  /**
   * The url to request
   */
  url: string;
  /**
   * The data to send (only required if the request type is POST, PUT or PATCH)
   */
  data?: any;
  config: SaxiosRequestConfig;
};

type RequestTypes =
  | "POST"
  | "post"
  | "GET"
  | "get"
  | "PUT"
  | "put"
  | "PATCH"
  | "patch"
  | "DELETE"
  | "delete";
//#endregion SaxiosRequestOptions

//#region Form Options
type SaxiosFormPostOptions = {
  /**
   * The url to post the data to
   */
  url: string;
  /**
   * The form to post the data from
   */
  form: HTMLFormElement;
  config: SaxiosRequestConfig;
};

type SaxiosFormPutOptions = {
  /**
   * The url to update the data
   */
  url: string;
  /**
   * The new form to get the data from
   */
  newForm: HTMLFormElement;
  config: SaxiosRequestConfig;
};

type SaxiosFormPatchOptions = SaxiosFormPutOptions;
//#endregion Form Options

type SaxiosPostOptions = {
  /**
   * The url to post the data to
   */
  url: string;
  /**
   * The data to post
   */
  data: any;
  config: SaxiosRequestConfig;
};

type SaxiosGetOptions = {
  /**
   * The url to fetch the data from
   */
  url: string;
  config: SaxiosRequestConfig;
};

type SaxiosPutOptions = {
  /**
   * The url to update the data
   */
  url: string;
  /**
   * The new data
   */
  newData: any;
  config: SaxiosRequestConfig;
};

type SaxiosPatchOptions = SaxiosPutOptions;

type SaxiosDeleteOptions = {
  /**
   * The url to delete
   */
  url: string;
  config: SaxiosRequestConfig;
};
//#endregion Function options

export {
  // Request Options
  SaxiosPostOptions,
  SaxiosGetOptions,
  SaxiosPutOptions,
  SaxiosPatchOptions,
  SaxiosDeleteOptions,
  SaxiosRequestOptions,
  SaxiosResponseTypes,
  // Form request Options
  SaxiosFormPostOptions,
  SaxiosFormPutOptions,
  SaxiosFormPatchOptions,
  //
  SaxiosRequestConfig,
  SaxiosOptions,
  SaxiosResponse,
};
