import UserResource from "./../api/typicode/resources/UserResource.js";

let app = new Vue({
    el: '#app',
    data: {
        searchText: '',
        clients: []
    },
    created() {
        this.fetchApi();
    },
    methods: {
        /**
         * Fetches Users from External Api
         *
         * @param searchFor string
         */
        fetchApi(searchFor) {
            UserResource.getUsers().then(res => {
                this.clients = res.data;
            });
        }
    },
    computed: {
        /**
         * Filtered Clients According to Search Request
         *
         * @returns {[]}
         */
        filteredClients() {
            if (this.searchText) {
                return this.clients.filter(client => {
                    return client.name.toLowerCase().includes(this.searchText.toLowerCase())
                })
            }
        }
    },
});
