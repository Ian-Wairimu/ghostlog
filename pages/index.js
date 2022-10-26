import Header from "../components/Header/Header";
import Popup from "../components/Popup/Popup";
import {Card} from "../components/Card/Card";
import Grid from "../components/Grid/Grid";
import data from "../data.json";

const Home = () => {
    return (
        <>
            <Header />
            <Popup />
            <Grid>
                {
                    data.map((v, i) => {
                        return <Card key={i} cardContent={v.cardContent} cardName={v.cardName}/>
                    }
                    )
                }
            </Grid>
        </>
    );
}

export default Home;