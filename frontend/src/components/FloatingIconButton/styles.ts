import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    fab: {
        position: "fixed" as const,
        bottom: 32,
        right: 32,
        width: 56,
        height: 56,
        backgroundColor: "#007bff",
        color: "#fff",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        transition: "background-color 0.3s ease, transform 0.2s ease",
        "&:hover": {
            backgroundColor: "#0056b3",
            transform: "scale(1.1)",
        },
    },
});