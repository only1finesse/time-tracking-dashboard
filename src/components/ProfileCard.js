const ProfileCard = () => {
    return (
        <div>
            <div className='gap-6 px-8 py-10 bg-profile rounded-xl w-80 pb-24'>
                <div className="profile-pic bg-white rounded-full justify-start max-w-max p-1 mb-12">
                    <img className='justify-center max-h-24' src="resources/images/image-jeremy.png" alt="splitter logo" />
                </div>
                <div className="info-container flex flex-col">
                    <label className="text-lg font-normal text-paleBlue" htmlFor="inp-bill"> Report for </label>
                    <p className="inline-block tracking-wide leading-tight text-5xl font-thin text-white" htmlFor="inp-bill"> Jeremy Robson </p>
                </div>
            </div>
            
            
        </div>
    )
}

export default ProfileCard;