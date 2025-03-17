import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    cardsContainer: {
        maxWidth: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        boxSizing: "border-box",
        gap: 32,
        padding: 32,

        "@media screen and (orientation: portrait)": {
            gap: 16,
            padding: 16,
        }
    },
    emptyImage: {
        width: "50%",
        height: "auto",
    },
    loader: {
        width: 150,
        height: 150,
    }
});