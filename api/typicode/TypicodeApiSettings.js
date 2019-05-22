
export default {
    apiUrl: 'https://jsonplaceholder.typicode.com/',

    /**
     * Http Default
     */
    http: axios.create({}),

    /**
     * Get Typicode Api Route
     *
     * @param additional
     * @returns {string}
     */
    apiRoute: function (additional) {
        return this.apiUrl + additional;
    },

}
