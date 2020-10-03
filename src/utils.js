
import numeral from "numeral";

export const sortData = (data) => {
    const sortData = [...data];

    sortData.sort((a, b) => {
        if (a.cases > b.cases) {
            return -1;
        } else
            return 1;
    })

    return sortData;
}

export const prettyPrintStat = (stat) =>
    stat ? `+${numeral(stat).format("0.0a")}` : "+0";
