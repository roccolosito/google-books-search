import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyDZQyd2wzg_0BH3t8FSsCWOvHnsnssTdHc";

// Export an object with a "search" method that searches the Google Books API for the passed query
export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};
