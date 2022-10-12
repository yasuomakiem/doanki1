
import HeaderHome from "./headHome"
import HomeNew from "./homenew"
import Son from "./son"
import Spnb from "./spnb"

function Home() {
    window.scrollTo(0,0)
    return (
        <>  
            <HeaderHome />
            
            <HomeNew />
            <Spnb />
            <Son />
        </>
    )
}
export default Home