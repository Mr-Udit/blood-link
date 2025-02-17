import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const DonorsFeedback = () => {
    return (
        <div className="w-[800px] m-auto">
            <h1 className="w-full text-center font-bold text-3xl text-red-700" style={{filter : "drop-shadow(0px 0px 10px red)"}}>
                Donors Feedback Form 
            </h1>
            <form className=" text-red-700 flex flex-col items-center p-4 gap-4">
                <Input
                    placeholder="Enter Your Name"
                ></Input>
                <Input
                    placeholder={"Enter Your City "}
                ></Input>
                <Input
                    placeholder={"Enter Your Email"}
                ></Input>
                <Textarea placeholder="Type your message here." />
                <Button className="bg-red-700 text-white" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default DonorsFeedback
