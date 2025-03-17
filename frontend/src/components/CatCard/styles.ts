import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    card: {
      border: "1px solid #ddd",
      borderRadius: 16,
      padding: 16,
      minWidth: 300,
      maxWidth: 350,
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      textAlign: "center",
      boxSizing: "border-box",
    },
    image: {
      width: "100%",
      height: 200,
      objectFit: "cover",
      borderRadius: 16,
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
      margin: "10px 0",
    },
    description: {
      fontSize: 14,
      color: "#555",
      marginBottom: 10,
    },
    miceList: {
      listStyleType: "none",
      padding: 0,
      marginTop: 10,
    },
    miceItem: {
      fontSize: 14,
      backgroundColor: "#f5f5f5",
      padding: "5px 10px",
      borderRadius: 4,
      margin: "5px 0",
    },
  });