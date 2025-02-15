
import Hero from "./Hero"
import Infor from "./Infor"
import DonationImportance from "@/assets/constants"
import { Separator } from "./ui/separator";
import Footer from "./Footer";
import BloodSearch from "./BloodSearch";


const donationImportance = DonationImportance.description.split(" ").slice(0, 100).join(" ") + "...";

const Home = () => {
    return (
        <main>
            <Hero />
            <Separator className=" w-[500px] h-[3px] bg-red-500 m-auto my-7" />
            <BloodSearch/>
            <Separator className=" w-[700px] m-auto my-7" />
            <Infor heading={DonationImportance.heading}>
                {donationImportance}
            </Infor>
            <Separator className=" w-[300px] m-auto my-7" />
            <Footer />
        </main>
    )
}

export default Home
