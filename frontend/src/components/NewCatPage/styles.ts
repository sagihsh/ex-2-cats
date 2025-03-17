import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    page: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        marginBottom: 0,
    },
    backLink: {
        alignSelf: "flex-start",
        padding: 16,
    }
});