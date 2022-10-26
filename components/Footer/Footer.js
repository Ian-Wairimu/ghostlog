import Button from "../Button/Button";
import Abstract from "./FooterItems/Abstract";
import Community from "./FooterItems/Community";
import Company from "./FooterItems/Company";
import Resources from "./FooterItems/Resources";
import CopyRight from "./FooterItems/CopyRight";

const Footer = () => {
    return (
        <div className="footer--cont">
            <Abstract />
            <Community />
            <Company />
            <Resources />
            <CopyRight />
        </div>
    )
}

export default Footer;
