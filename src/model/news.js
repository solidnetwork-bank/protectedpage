import OnePic from '../static/images/one-image.png';

function getNews() {
    const dataRows = [];
    dataRows.push(
        getRow(
            1,
            "Name Last One",
            "https://bank.solidnetwork.xyz",
            "Name Last One",
            OnePic,
            "https://bank.solidnetwork.xyz",
            "Title One words words words.",
            true,
            "March 14th 2024"
        )
    );

    dataRows.push(
        getRow(
            2,
            "Name Last Two",
            "https://bank.solidnetwork.xyz",
            "Name Last Two",
            OnePic,
            "https://bank.solidnetwork.xyz",
            "Title Two words words words.",
            false,
            "March 15th 2024"
        )
    );

    dataRows.push(
        getRow(
            3,
            "Name Last Three",
            "https://bank.solidnetwork.xyz",
            "Name Last Three",
            OnePic,
            "https://bank.solidnetwork.xyz",
            "Title Three words words words.",
            false,
            "March 16th 2024"
        )
    );

    dataRows.push(
        getRow(
            4,
            "Name Last Four",
            "https://bank.solidnetwork.xyz",
            "Name Last Four",
            OnePic,
            "https://bank.solidnetwork.xyz",
            "Title Four words words words.",
            false,
            "March 17th 2024"
        )
    );

    dataRows.push(
        getRow(
            5,
            "Name Last Five",
            "https://bank.solidnetwork.xyz",
            "Name Last Five",
            OnePic,
            "https://bank.solidnetwork.xyz",
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

