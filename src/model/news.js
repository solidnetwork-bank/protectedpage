import OnePic from '../static/images/one-image.png';
import {
    HOMEPAGE_ENDPOINT
} from '../components/components-const';

function getNews() {
    const dataRows = [];
    dataRows.push(
        getRow(
            1,
            "Name Last One",
            HOMEPAGE_ENDPOINT,
            "Name Last One",
            OnePic,
            HOMEPAGE_ENDPOINT,
            "Title One words words words.",
            true,
            "March 14th 2024"
        )
    );

    dataRows.push(
        getRow(
            2,
            "Name Last Two",
            HOMEPAGE_ENDPOINT,
            "Name Last Two",
            OnePic,
            HOMEPAGE_ENDPOINT,
            "Title Two words words words.",
            false,
            "March 15th 2024"
        )
    );

    dataRows.push(
        getRow(
            3,
            "Name Last Three",
            HOMEPAGE_ENDPOINT,
            "Name Last Three",
            OnePic,
            HOMEPAGE_ENDPOINT,
            "Title Three words words words.",
            false,
            "March 16th 2024"
        )
    );

    dataRows.push(
        getRow(
            4,
            "Name Last Four",
            HOMEPAGE_ENDPOINT,
            "Name Last Four",
            OnePic,
            HOMEPAGE_ENDPOINT,
            "Title Four words words words.",
            false,
            "March 17th 2024"
        )
    );

    dataRows.push(
        getRow(
            5,
            "Name Last Five",
            HOMEPAGE_ENDPOINT,
            "Name Last Five",
            OnePic,
            HOMEPAGE_ENDPOINT,
            "Title Five words words words.",
            false,
            "March 18th 2024"
        )
    );

    return dataRows;
}

export default getNews;

function getRow(idx, name, authorHref, alt, src, linkHref, heading, isPinned, date) {
    const author = {
        name: name,
        link: {
            href: authorHref
        },
        img: {
            alt: alt,
            src: src
        }
    };
    const link = {
        anchor: {
            href: linkHref
        },
        heading: heading
    };

    const content = {
        isPinned: isPinned,
        date: date
    };

    const row = {
        idx: idx,
        author: author,
        link: link,
        content: content
    };

    return row;
}

