import { bloodDonors } from "@/assets/constants"
import { Button } from "./ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"


const Donors = () => {
    return (
        <div className="flex flex-wrap flex-row w-[1100px] m-auto">
            {
                bloodDonors.map((donor,key)=>(
            <Card key={key} className="rounded mr-5 mt-4 ml-4  shadow-lg border-none bg-red-700 w-[180px] h-[180px]">
                <CardHeader className="flex items-center justify-between  text-white">
                    <CardTitle>{donor.city}</CardTitle>
                    <CardDescription>
                        <p>{donor.name}</p>
                        <p>{donor.email}</p>
                        <p>{donor.contact}</p>
                    </CardDescription>
                    <Button variant="secondary" className="bg-white text-red-700 hover:bg-red-700 hover:text-white rounded-lg" >Contact Now</Button>
                </CardHeader>
            </Card>
                ))
            }
        </div>
    )
}

export default Donors
