import { useForm } from "react-hook-form";
import { addNewCat, NewCatInput } from "../../services/catsService";
import { useNavigate } from "react-router";
import { FaPlus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { useStyles } from "./styles";

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
