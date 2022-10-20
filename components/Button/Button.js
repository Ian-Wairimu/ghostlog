export const Button = ({btnOnclick, btnClassname, btnName}) => {
    return (
        <button onClick={btnOnclick} className={btnClassname}>
            {btnName}
        </button>
    )
}