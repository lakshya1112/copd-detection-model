const AlumniCard = ({ alumniList }) => {
    console.log(alumniList[0])
    if (!Array.isArray(alumniList)) {
        return <p>No alumni data available</p>;
    }

    return (
        <div className="wrapper">
            {alumniList.map((alumnus, index) => {
                return(
                <div
                    key={index}
                    className="card">
                    <img
                        src={alumnus?.imgURL || "default-image.jpg"} // Provide a default image if imgURL is missing
                        alt="profile picture"
                        className="w-24 h-24 rounded-full mb-2 border-solid border- border-neutral-950 overflow-hidden"
                    />
                    <p id="fullname" className="text-md font-bold overflow-hidden">
                        {alumnus?.fullname || "N/A"}
                    </p>
                    <p id="address" className="text-xs text-gray-500 overflow-hidden">
                        {alumnus?.grad_year || "N/A"}
                    </p>
                    <button
                        type="button"
                        className="connect-btn">
                        Connect
                    </button>
                </div>
                )
            })}
        </div>
    );
};

export default AlumniCard;