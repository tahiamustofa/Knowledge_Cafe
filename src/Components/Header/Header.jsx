import img from '../../assets/images/profile.png'
const Header = () => {
    return (
        <>
        <header className='bg-amber-50 p-5 border-b-2'>
        <div className='flex justify-between items-center mx-10 '>
            <h2 className='text-2xl font-bold '>Knowledge Cafe </h2> 
            <img src={img}></img>
        </div>
        </header>
        </>
    );
};

export default Header;