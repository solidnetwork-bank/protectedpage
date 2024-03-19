import getNews from "./news";
import getProposals from "./proposals";
import getEditorial from "./editorial";
import {
    LAST_UPDATE
} from './store-const';

const store = {
    footer: {
        lastUpdate: LAST_UPDATE
    },
    news: getNews(),
    proposals: getProposals(),
    editorial: getEditorial()
}

export default store;
