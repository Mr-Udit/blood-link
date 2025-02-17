
// import Hero from "./Hero"
import Infor from "./Infor"
import DonationImportance from "@/assets/constants"
import { Separator } from "./ui/separator";
import Footer from "./Footer";
// import BloodSearch from "./BloodSearch";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";


const donationImportance = DonationImportance.description.split(" ").slice(0, 100).join(" ") + "...";

const Home = () => {
    return (
        <main className="w-[1280px] m-auto">
            <Navbar />
            {/* Section 1 */}
            <Section1 />
            <Separator className=" w-[500px] h-[3px] bg-red-500 m-auto my-7" />
            <Section2/>
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
