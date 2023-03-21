const Shimmer = () => {
    return(
        <div className="flex flex-wrap">
          {Array(15).fill("").map((e, index) => (
            <div key={index} className="w-64 h-96 p-2 m-2 bg-gray-50"></div>
          ))}
        </div>
    )

}

export default Shimmer;