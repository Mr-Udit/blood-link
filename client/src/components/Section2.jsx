import { useState } from "react"
import { Input } from "./ui/input"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";
import { bloodBankData } from "@/assets/constants";

const Section2 = () => {
  const [searchData, setSearchData] = useState('');
  // const {cityName,unitsAvailable} = useCollection()
  // const handleClick = () => {
  //   // const city = "";
  // }
  return (
    <div>
      <div>
        {/* Search Bar  */}
        {/* <Input type="" placeholder="search blood group...." 
        onClick={handleSearch} >
        </Input> */}
      </div>
      <div>
        {/* cards */}
      </div>
      <div className="container p-6 mx-auto">
        <h2 className="mb-4 text-2xl font-bold text-center text-red-500">Find Blood Donors</h2>
        <div className="flex justify-center mb-6">
          <Link to="/bloodgroup-finder" className="w-full">
            <Input
              className="text-red-700 bg-red-100"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              placeholder="search blood ..........."
            />
          </Link>
        </div>
        <div className="w-[1100px] m-auto">
          <div className=" md:mt-10 h-[320px] overflow-hidden flex flex-wrap flex-row lg:my-auto">
            {
              bloodBankData.map((data,key)=>(
            <Card className="rounded mr-5 mt-4  shadow-lg border-none bg-red-700 w-[200px] h-[140px] " key={key}>
              <CardHeader className="flex items-center justify-between  text-white">
                <CardTitle className="text-2xl">{data.city}</CardTitle>
                <CardDescription>
                  <p className="w-full text-center text-xl">Units Avilable</p>
                  <p className="w-full text-center text-xl">{data.unit}</p>
                </CardDescription>
              </CardHeader>
            </Card>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Section2
