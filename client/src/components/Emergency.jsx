
import { bloodBanks } from "@/assets/constants"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"


const Emergency = () => {
    return (
        <div className="container w-[1000px] m-auto mt-10 text-center">
            <Input className="mb-10 text-4xl text-white bg-red-700 pt-3 pb-3" placeholder="searh the nearest blood bank...." style={{ textTransform: "capitalize" }} />
            <p className="text-xl text-red-400 w-[800px] m-auto" style={{ textTransform: "capitalize" }}>
                <Card className="rounded-lg mr-5 shadow-lg border-none bg-red-700">
                    <CardHeader className="flex items-center justify-between  text-white">
                        <CardTitle>Blood Bank in City</CardTitle>
                        <CardDescription className="flex flex-wrap flex-row w-[800] justify-center">
                            {
                                bloodBanks.map((bank, key) => (
                                    <Card key={key} className="rounded-lg mr-5 mt-10 shadow-lg border-none bg-red-500 w-[200px] h-[140px] ">
                                        <CardHeader className="flex items-center justify-between  text-white">
                                            <CardTitle>{bank.name}</CardTitle>
                                            <CardDescription>
                                                <p>
                                                    {bank.address}
                                                </p>
                                                <p>
                                                    {bank.contact}
                                                </p>
                                            </CardDescription>
                                        </CardHeader>

                                    </Card>
                                ))
                            }
                        </CardDescription>
                    </CardHeader>
                </Card>
            </p>
        </div>
    )
}

export default Emergency
