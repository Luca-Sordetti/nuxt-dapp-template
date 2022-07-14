import { defineStore } from "pinia";

let eth = (window as any).ethereum;

export default defineStore("auth", {
    state: () => {
        return {
            account: null,
        }
    },

    getters: {
        /**
         * Check if the user is authenticated
         * @param state 
         * @returns {boolean}
         */
        isAuthenticated: (state) => state.account !== null,
    },

    actions: {
        /**
         * Send request to login to the provider
         * @returns {Promise<void>}
         */
        async login() {
            if( !eth ) 
                return console.log("[DApp] :No ethereum provider found");

            try {
                const data = await eth.request({ method: "eth_requestAccounts" });
                this.account = data[0];

                eth.on("accountsChanged", this.logout);

                console.log("Logged in as", this.account);
            } catch(e) {
                console.log(e);
            }
        },

        /**
         * Send request to logout from the provider (Not working)
         */
        async logout()
        {
            this.account = null;
            window.location.reload();
        },

        /**
         * Check if the user is authenticated
         * @returns {Promise<void>}
         */
        async check()
        {
            if( !eth ) return;

            // Check if wallet is connected
            if( eth.isConnected() && eth.selectedAddress ){
                return this.login();
            }
        }
    },
});