import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    form: {
        maxWidth: 500,
        width: "calc(100% - 16px)",
        padding: 8,
        background: "#fff",
        borderRadius: 16,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 15,
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 5,
        width: "100%",
        boxSizing: "border-box",
    },
    input: {
        padding: 10,
        borderRadius: 12,
        border: "1px solid #ccc",
        fontSize: 16,
        width: "100%",
        "&:focus": {
            borderColor: "#007BFF",
            outline: "none",
        },
        boxSizing: "border-box",
    },
    error: {
        color: "red",
        fontSize: 14,
        margin: 5
    },
    button: {
        padding: 10,
        borderRadius: 20,
        border: "none",
        fontSize: 16,
        cursor: "pointer",
        transition: "0.3s",
    },
    submitButton: {
        extend: "button",
        background: "#007BFF",
        color: "white",
        "&:hover": {
            background: "#0064cf",
        },
    },
    addButton: {
        extend: "button",
        background: "white",
        color: "#007BFF",
        border: "none",
        "&:focus": {
            border: "none",
        },
        "&:hover": {
            background: "#f4f4f4",
        },
    },
    removeButton: {
        extend: "button",
        background: "white",
        color: "#dc3545",
        "&:hover": {
            background: "#f4f4f4",
        },
    },
    miceContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
    mouseRow: {
        display: "flex",
        alignItems: "center",
        gap: 10,
    },
});