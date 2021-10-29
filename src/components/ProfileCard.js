const timeframeLink = 'text-lg text-desBlue hover:text-white focus:text-black'

const ProfileCard = () => {
    return (
        <div className='min-h-full flex'>
            <div className='bg-darkBlue h-full rounded-xl pb-26'>
                <div className='gap-6 px-6 py-8 bg-profile rounded-xl w-60 pb-20'>
                    <div className="profile-pic bg-white rounded-full justify-start max-w-max p-px mb-8">
                        <img className='justify-center text-center max-h-16 w-18 pt-px' src="resources/images/image-jeremy.png" alt="splitter logo" />
                    </div>
                    <div className="info-container flex-col">
                        <label className="text-l font-normal text-paleBlue" htmlFor="inp-bill"> Report for </label>
                        <p className="inline-block tracking-wide leading-tight text-4xl font-thin text-white" htmlFor="inp-bill"> Jeremy Robson </p>
                    </div>
                </div>
                <div className='timeframe p-4'>
                    <ul className='list-none grid gap-y-4'>
                        <li className={`${timeframeLink}`}><a href="#1">Daily</a></li>
                        <li className={`${timeframeLink}`}><a href="#2">Weekly</a></li>
                        <li className={`${timeframeLink}`}><a href="#3">Monthly</a></li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default ProfileCard;