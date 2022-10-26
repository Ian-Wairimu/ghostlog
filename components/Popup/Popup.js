import style from "./Popup.module.css";
import Button from "../Button/Button";

const Popup = () => {
    return (
        <div className={style.popup}>
            <h1 className={style.popupH1}>Save On Cost while Measuring your Business Analytics With Us</h1>
            {
                [
                    {
                        btnName:"Get Started",
                        btnOnclick: null,
                    }
                ].map((v, i) => {
                    return <Button key={i} btnName={v.btnName} btnOnclick={v.btnOnclick} />

                })
            }
        </div>
    );
}

export default Popup;