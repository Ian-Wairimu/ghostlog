import Image from 'next/image';
import {Button} from "../Button/Button";

export const Card = ({cardIcon, cardName, cardContent, cardBtnOnclick}) => {
    const cardBtnCont = [
        {
            btnName: 'Learn More ->',
            btnClassName: 'card--btn'
        }
    ];
    return (
        <div className="card--con">
          <Image src={cardIcon} alt="card icons" />
            <div className="card--con-cont">
                <h1 className="card--name">
                    {cardName}
                </h1>
                <p className="card--par">
                    {cardContent}
                </p>
                {
                    cardBtnCont.map(btn => {
                        return <Button btnName={btn.btnName} btnClassname={btn.btnClassName} btnOnclick={cardBtnOnclick} />

                    })
                }
            </div>
        </div>
    );
}