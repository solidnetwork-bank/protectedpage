import getNews from "./news";
import getProposals from "./proposals";
import getEditorial from "./editorial";
import {
    LAST_UPDATE
} from './store-const';

const storeNoRedux = {
    footer: {
        lastUpdate: LAST_UPDATE
    },
    news: getNews(),
    proposals: getProposals(),
    editorial: getEditorial()
}

export default storeNoRedux;
