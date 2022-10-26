import Image from 'next/image';
import home from "../../public/home.jpg";
import style from "./header.module.css";
import Button from "../Button/Button";

const Header = () => {
    return (
        <div className={style.header}>
            <Image src={home} height={400} width={600} className={style.headerImg} alt="home image" />
            <div className={style.headerContent}>
                <h1 className={style.headerH1}>Hey 👋, Welcome to Ghostlog</h1>
                <p className={style.headerP}>
                    Saving off server production logs is important for debugging, app performance, and business analytics. where we mainly focus on business analytics and app performance use cases. for apps hosted in vercel sign in to get free month on using our application
                </p>
                {
                    [
                        {
                            btnName:"Sign in",
                            btnOnclick: null,
                        }
                    ].map((v, i) => {
                        return <Button key={i} btnName={v.btnName} btnOnclick={v.btnOnclick} />

                    })
                }
            </div>
        </div>
    );
}

export default Header