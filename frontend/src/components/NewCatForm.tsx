import { useForm } from "react-hook-form";
import { createUseStyles } from "react-jss";
import { addNewCat, NewCatInput } from "../services/catsService";
import { useNavigate } from "react-router";
import { FaPlus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const IMAGE_URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))/i;

export const NewCatForm = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm<NewCatInput>({ defaultValues: { mice: [] } });

    const onSubmit = async (data: NewCatInput) => {
        await addNewCat(data);
        navigate("/");
    };

    const mice = watch("mice");

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <div className={classes.inputGroup}>
                <label><b><b>Name</b></b></label>
                <input
                    {...register("name", { required: "Name is required" })}
                    className={classes.input}
                />
                {errors.name && <p className={classes.error}>{errors.name.message}</p>}
            </div>

            <div className={classes.inputGroup}>
                <label><b>Description</b></label>
                <textarea
                    {...register("description", { required: "Description is required" })}
                    className={classes.input}
                />
                {errors.description && <p className={classes.error}>{errors.description.message}</p>}
            </div>

            <div className={classes.inputGroup}>
                <label><b>Image URL</b></label>
                <input
                    {...register("image", {
                        required: "Image URL is required",
                        pattern: {
                            value: IMAGE_URL_REGEX,
                            message: "Please enter a valid image URL of a widely used image format",
                        }
                    })}
                    className={classes.input}
                />
                {errors.image && <p className={classes.error}>{errors.image.message}</p>}
            </div>

            <div className={classes.miceContainer}>
                <label><b>Mice</b></label>
                {mice.map((_, index) => (
                    <div key={index} className={classes.mouseRow}>
                        <input
                            {...register(`mice.${index}.name`, { required: "Mouse name is required" })}
                            className={classes.input}
                        />
                        <button
                            type="button"
                            onClick={() => setValue("mice", mice.filter((_, i) => i !== index))}
                            className={classes.removeButton}
                        >
                            <FaTrashCan />
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => setValue("mice", [...mice, { name: "" }])}
                    className={classes.addButton}
                >
                    <FaPlus />
                </button>
            </div>

            <button type="submit" className={classes.submitButton}>
                Submit
            </button>
        </form>
    );
};

const useStyles = createUseStyles({
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