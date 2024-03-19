
export default function getEditorial() {
    const editorial = [];

    editorial.push(
        {
            idx: 1,
            heading: "Heading One.",
            textRows: getTextRows(1)
        }
    );

    editorial.push(
        {
            idx: 2,
            heading: "Heading Two.",
            textRows: getTextRows(2)
        }
    );

    editorial.push(
        {
            idx: 3,
            heading: "Heading Three.",
            textRows: getTextRows(3)
        }
    );

    editorial.push(
        {
            idx: 4,
            heading: "Heading Four.",
            textRows: getTextRows(4)
        }
    );

    return editorial;
}


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