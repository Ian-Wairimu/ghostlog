import Image from 'next/image';
import {Button} from "../Button/Button";
import style from "./Card.module.css";
import cardIcon from "../../public/card.jpg";

export const Card = ({ cardName, cardContent, cardBtnOnclick}) => {
    const cardBtnCont = [
        {
            btnName: 'Learn More ->',
            btnClassName: 'card--btn'
        }
    ];
    return (
        <div className={style.card}>
            <div className={style.cardCon}>
              <Image src={cardIcon} className={style.cardImage} alt="card icons" />
                <div className={style.cardCont}>
                    <h1 className="card--name">
                        {cardName}
                    </h1>
                    <p className="card--par">
                        {cardContent}
                    </p>
                    {
                        cardBtnCont.map((btn, i) => {
                            return <Button btnName={btn.btnName} key={i} btnClassname={btn.btnClassName} btnOnclick={cardBtnOnclick} />

                        })
                    }
                </div>
            </div>
        </div>
    );
}