import ApiSettings from "../TypicodeApiSettings.js";

/**
 * Typicode Api UserResource
 */
export default {
    /**
     * Get Users
     * @returns {T | ActiveX.IXMLDOMNode | Promise<any> | V | string | IDBRequest | any | FormDataEntryValue | MediaKeyStatus}
     */
    getUsers: function () {
        return ApiSettings.http.get(ApiSettings.apiRoute('users'));
    },
}
