import style from "./Button.module.css";

export const Button = ({btnOnclick, btnClassname, btnName}) => {
    return (
        <button onClick={btnOnclick} className={style.btnClassname}>
            {btnName}
        </button>
    )
}
export default Button;