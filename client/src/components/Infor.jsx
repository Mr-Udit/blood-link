/* eslint-disable react/prop-types */

const Infor = (props) => {
  return (
    <div className="container w-[1000px] m-auto mt-10 text-center">
        <h1 className="mb-10 text-4xl text-white bg-red-700 pt-3 pb-3" style={{textTransform:"capitalize"}}>
            {props.heading}
        </h1>
        <p className="text-xl text-red-400 w-[800px] m-auto" style={{textTransform:"capitalize"}}>
            {
                props.children
            }
        </p>
        
    </div>
  )
}

export default Infor
