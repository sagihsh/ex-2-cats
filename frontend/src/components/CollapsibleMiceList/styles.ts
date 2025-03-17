import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        borderRadius: 16,
        padding: 10,
        boxSizing: "border-box",
        width: "100%",
        cursor: "pointer",
        userSelect: "none",
        transition: "background 0.2s",
        "&:hover": {
            background: "#f9f9f9",
        },
    },
    title: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    list: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        maxHeight: 0,
        overflow: "hidden",
        transition: "max-height 0.3s ease-in-out, margin-top 0.3s ease-in-out",
    },
    expanded: {
        marginTop: 10,
        maxHeight: 100,
    },
    scrollable: {
        overflow: "auto",
    },
    arrow: {
        transition: "transform 0.3s",
    },
    rotated: {
        transform: "rotate(90deg)",
    },
});