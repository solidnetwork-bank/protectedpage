
function getProposals() {
    const proposals = [];

    proposals.push(
        {
            idx: 1,
            heading: "This is heading One.",
            textRows: getTextRows(1)
        }
    );

    proposals.push(
        {
            idx: 2,
            heading: "This is heading Two.",
            textRows: getTextRows(2)
        }
    );

    return proposals;
}

export default getProposals;

function getTextRows(idx) {
    const dataRows = [];

    switch (idx) {
        case 1:

            dataRows.push(
                getRow(
                    1,
                    "This is paragraph One in text One."
                )
            );

            dataRows.push(
                getRow(
                    2,
                    "This is paragraph Two in text One."
                )
            );

            break;

        case 2:


            dataRows.push(
                getRow(
                    1,
                    "This is paragraph One in text Two."
                )
            );
            dataRows.push(
                getRow(
                    2,
                    "This is paragraph Two in text Two."
                )
            );
            dataRows.push(
                getRow(
                    3,
                    "This is paragraph Three in text Two."
                )
            );
            
            break;

        default:

    }

    return dataRows;
}

function getRow(idx, content) {

    const row = {
        idx: idx,
        content: content
    };

    return row;
}