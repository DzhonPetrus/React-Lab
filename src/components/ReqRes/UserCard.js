function UserCard({user}){
    const {id, email, first_name, last_name, avatar} = user;

    return(
        <>
        <div className='col-sm-6 col-md-4'>
            <div className='card'>
                <div className='user text-center'>
                    <div className='profile'>
                        <img src={avatar} alt='avatar' className='rounded-circle'/>
                    </div>
                </div>
                <div className='mt-5 text-center'>
                    <h4 className='mb-0'>{first_name} {last_name}</h4>
                    <span className='text-muted d-block mb-2'>{email}</span>
                    <span className='text-muted d-block mb-2'>{id}</span>
                </div>
            </div>
        </div>
        </>
    )
}
export default UserCard;