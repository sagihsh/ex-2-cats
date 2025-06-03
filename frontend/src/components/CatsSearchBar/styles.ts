import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    inputContainer: {
        display: "flex",
        alignItems: "center",
        border: '1px solid #ccc',
        borderRadius: "16px",
        padding: "5px",
        width: 'calc(100% - 64px)',
        boxSizing: "border-box",
        margin: 32,
        marginBottom: 0,
        "& input": {
            border: "none",
            outline: "none",
            padding: "10px",
            flex: 1,
            fontSize: "16px",
        },
    },
    searchIcon: {
        marginLeft: "10px",
        fontSize: "16px",
        color: "gray",
    },
    catList: {
        listStyleType: 'none',
        padding: 0,
    },
    catItem: {
        padding: '8px',
        margin: '5px 0',
        borderBottom: '1px solid #ddd',
    },
});