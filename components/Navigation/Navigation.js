import NavLinks from "./NavLinks/NavLinks";
import {Button} from "../Button/Button";

const Navigation = () => {
    const li = [
        "home",
        "about",
        "pricing",
        "documentation",
    ];
    return (
        <div className="nav--con">
            <div className="nav--logo">
                <h1>Ghostlog</h1>
            </div>
            <div className="nav--links_middle">
                {
                    li.map((v, i) => {
                        return <NavLinks key={i} linkLists={v} />;
                    })
                }
            </div>
            <div className="nav--btn">
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
    )
}

export default Navigation;