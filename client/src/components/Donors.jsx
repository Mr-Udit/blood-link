import { Button } from "./ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"


const Donors = () => {
    return (
        <div>
            <Card className="rounded mr-5  shadow-lg border-none bg-red-700 w-[180px] h-[180px] m-auto ">
                <CardHeader className="flex items-center justify-between  text-white">
                    <CardTitle>City Name</CardTitle>
                    <CardDescription>
                        <p>John Adem</p>
                        <p>john@example.com</p>
                        <p>+91 9748488383</p>
                    </CardDescription>
                    <Button variant="secondary" className="bg-white text-red-700 hover:bg-red-700 hover:text-white rounded-lg" >Contact Now</Button>
                </CardHeader>
            </Card>
        </div>
    )
}

export default Donors
