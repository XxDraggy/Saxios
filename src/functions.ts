import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from "axios";
import { Saxios } from "./saxios";
import {
  SaxiosDeleteOptions,
  SaxiosFormPatchOptions,
  SaxiosFormPostOptions,
  SaxiosFormPutOptions,
  SaxiosGetOptions,
  SaxiosOptions,
  SaxiosPatchOptions,
  SaxiosPostOptions,
  SaxiosPutOptions,
  SaxiosRequestConfig,
  SaxiosRequestOptions,
  SaxiosResponse,
} from "./types";

function initializeSaxios(options: SaxiosOptions): Saxios {
  return new Saxios(options);
}

//#region Convertor
function toRequestConfig(config: SaxiosRequestConfig): AxiosRequestConfig {
  return {};
}

function toSaxiosResponse<DataType>(
  response: AxiosResponse
): SaxiosResponse<DataType> {
  return {
    config: response.config,
    data: response.data,
    headers: response.headers,
    status: {
      code: response.status,
      name: response.statusText,
    },
    request: response.request,
    axiosResponse: response,
  };
}
//#endregion Convertor

function awaitCall(promise: Promise<AxiosResponse>): AxiosResponse {
  var response: AxiosResponse | null = null;

  promise.then((axiosResponse) => (response = axiosResponse));

  while (!response) {}

  return response;
}

//#region Requests
function saxiosPost(
  axios: AxiosInstance,
  options: SaxiosPostOptions
): SaxiosResponse {
  const axiosResponse = awaitCall(
    axios.post(options.url, options.data, toRequestConfig(options.config))
  );

  return toSaxiosResponse(axiosResponse);
}

function saxiosGet(
  axios: AxiosInstance,
  options: SaxiosGetOptions
): SaxiosResponse {
  const axiosResponse = awaitCall(
    axios.get(options.url, toRequestConfig(options.config))
  );

  return toSaxiosResponse(axiosResponse);
}

function saxiosPut(
  axios: AxiosInstance,
  options: SaxiosPutOptions
): SaxiosResponse {
  const axiosResponse = awaitCall(
    axios.put(options.url, options.newData, toRequestConfig(options.config))
  );

  return toSaxiosResponse(axiosResponse);
}

function saxiosPatch(
  axios: AxiosInstance,
  options: SaxiosPatchOptions
): SaxiosResponse {
  const axiosResponse = awaitCall(
    axios.patch(options.url, options.newData, toRequestConfig(options.config))
  );

  return toSaxiosResponse(axiosResponse);
}

function saxiosDelete(
  axios: AxiosInstance,
  options: SaxiosDeleteOptions
): SaxiosResponse {
  const axiosResponse = awaitCall(
    axios.delete(options.url, toRequestConfig(options.config))
  );

  return toSaxiosResponse(axiosResponse);
}
//#endregion Requests

//#region Form Requests
function saxiosPostForm(axios: AxiosInstance, options: SaxiosFormPostOptions) {
  const axiosResponse = awaitCall(
    axios.postForm(options.url, options.form, toRequestConfig(options.config))
  );

  return toSaxiosResponse(axiosResponse);
}

function saxiosPutForm(axios: AxiosInstance, options: SaxiosFormPutOptions) {
  const axiosResponse = awaitCall(
    axios.putForm(options.url, options.newForm, toRequestConfig(options.config))
  );

  return toSaxiosResponse(axiosResponse);
}

function saxiosPatchForm(
  axios: AxiosInstance,
  options: SaxiosFormPatchOptions
) {
  const axiosResponse = awaitCall(
    axios.patchForm(
      options.url,
      options.newForm,
      toRequestConfig(options.config)
    )
  );

  return toSaxiosResponse(axiosResponse);
}
//#endregion Form Requests

export {
  // Form requests
  saxiosPostForm,
  saxiosPutForm,
  saxiosPatchForm,
  // Requests
  saxiosPost,
  saxiosGet,
  saxiosPut,
  saxiosPatch,
  saxiosDelete,
  // Helpers
  toSaxiosResponse,
  toRequestConfig,
  awaitCall,
  //
  initializeSaxios,
};
