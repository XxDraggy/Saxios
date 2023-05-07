import axios, { AxiosInstance } from "axios";
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
  SaxiosRequestOptions,
  SaxiosResponse,
} from "./types";
import * as call from "./functions";

class Saxios {
  constructor(options: SaxiosOptions) {
    this._axiosInstance = axios.create();
    this.form = new SaxiosForm(this._axiosInstance);
  }

  //#region REQUEST
  /**
   * Send a request to a url (server, database, etc).
   * @param options The options for this function
   * @returns A saxios response, which is nearly a axios response
   *
   * Sample:
   * ```javascript
   * function sendProductRequest(type, url, productId) {
   *   const product = getProduct(productId);
   *
   *   saxios.request({
   *     type,
   *     url
   *     data: product,
   *   });
   *
   *   console.log(`Request (${type}) successfully send.`)
   * }
   * ```
   */
  public request(options: SaxiosRequestOptions): SaxiosResponse {
    switch (options.type.toLowerCase()) {
      case "post":
        return this.post({
          data: options.data,
          url: options.url,
          config: options.config,
        });

      case "get":
        return this.get({
          url: options.url,
          config: options.config,
        });

      case "put":
        return this.put({
          newData: options.data,
          url: options.url,
          config: options.config,
        });

      case "patch":
        return this.patch({
          newData: options.data,
          url: options.url,
          config: options.config,
        });

      case "delete":
        return this.delete({
          url: options.url,
          config: options.config,
        });

      default:
        throw new Error(
          "SAXIOS ERROR: Unknown request type: " + options.type.toLowerCase()
        );
    }
  }
  //#endregion REQUEST

  //#region POST
  /**
   * Add data to a specific url (server, database, etc).
   * @param options The options for tis function
   * @returns A saxios response, which is nearly a axios response
   *
   * Sample:
   * ```javascript
   * function addProduct(product) {
   *   saxios.post({
   *     url: "/products/add",
   *     data: product
   *   });
   *
   *   console.log(`Product ${product.name} has been successfully added.`)
   * }
   * ```
   */
  public post(options: SaxiosPostOptions): SaxiosResponse {
    return call.saxiosPost(this._axiosInstance, options);
  }
  //#endregion POST

  //#region GET
  /**
   * Fetch data from a specific url (server, database, etc).
   * @param options The options for this function
   * @returns A saxios response, which is nearly a axios response
   *
   * Sample:
   * ```javascript
   * function getProduct(productNumber) {
   *   const product = saxios.get({
   *     url: `/products/${productNumber}`
   *   });
   *
   *   console.log(`Product: product.`)
   *
   *   return product;
   * }
   *
   * ```
   */
  public get(options: SaxiosGetOptions): SaxiosResponse {
    return call.saxiosGet(this._axiosInstance, options);
  }
  //#endregion GET

  //#region PUT
  /**
   * Replaces data from a specific url (server, database, etc) to the given new Data.
   * @param options The options for this function
   * @returns A saxios response, which is nearly a axios response
   *
   * Sample:
   * ```javascript
   * function updateProduct(productNumber, newProduct) {
   *   saxios.put({
   *     url: `/products/${productNumber}`,
   *     data: newProduct
   *   });
   *
   *   console.log(`Product with number ${productNumber} has been successfully updated.`)
   * }
   * ```
   */
  public put(options: SaxiosPutOptions): SaxiosResponse {
    return call.saxiosPut(this._axiosInstance, options);
  }
  //#endregion PUT

  //#region PATCH
  /**
   * Updates data from a specific url (server, database, etc) to the given new Data.
   * The difference to the put request is that patch just updates the data that was given.
   * @param options The options for this function
   * @returns A saxios response, which is nearly a axios response
   *
   * Sample:
   * ```javascript
   * function updateProductName(productNumber, newName) {
   *   saxios.put({
   *     url: `/products/${productNumber}`,
   *     data: {
   *       name: newName
   *     }
   *   });
   *
   *   console.log(`Product name has been successfully updated.`)
   * }
   * ```
   */
  public patch(options: SaxiosPatchOptions): SaxiosResponse {
    return call.saxiosPatch(this._axiosInstance, options);
  }
  //#endregion PATCH

  //#region DELETE
  /**
   * Delete data from a specific url (server, database, etc).
   * @param options The options for this function
   * @returns A saxios response, which is nearly a axios response
   *
   * Sample:
   * ```javascript
   * function deleteProdut(productNumber) {
   *   axios.delete({
   *     url: `/products/${productNumber}`
   *   });
   *
   *   console.log(`Product with number ${productNumber} has been successfully deleted.`)
   * }
   * ```
   */
  public delete(options: SaxiosDeleteOptions): SaxiosResponse {
    return call.saxiosDelete(this._axiosInstance, options);
  }
  //#endregion DELETE

  public form: SaxiosForm;

  private _axiosInstance: AxiosInstance;
}

class SaxiosForm {
  constructor(axiosInstance: AxiosInstance) {
    this._axiosInstance = axiosInstance;
  }

  //#region POST
  /**
   * Adds form to a specific url (server, database, etc).
   * @param options The options for this function
   * @returns A saxios response, which is nearly a axios response
   */
  public post(options: SaxiosFormPostOptions): SaxiosResponse {
    return call.saxiosPostForm(this._axiosInstance, options);
  }
  //#endregion POST

  //#region PUT
  /**
   * Replaces data from a specific url (server, database, etc) to the given form data.
   * @param options The options for this function
   * @returns A saxios response, which is nearly a axios response
   */
  public put(options: SaxiosFormPutOptions): SaxiosResponse {
    return call.saxiosPutForm(this._axiosInstance, options);
  }
  //#endregion PUT

  //#region PATCH
  /**
   * Updates data from a specific url (server, database, etc) to the form data.
   * The difference to the put request is that patch just updates the data that was given.
   * @param options The options for this function
   * @returns A saxios response, which is nearly a axios response
   */
  public patch(options: SaxiosFormPatchOptions): SaxiosResponse {
    return call.saxiosPatchForm(this._axiosInstance, options);
  }
  //#endregion PATCH

  private _axiosInstance: AxiosInstance;
}

export { Saxios };
