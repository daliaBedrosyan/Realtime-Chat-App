import { FaSearch } from "react-icons/fa";


const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>{<FaSearch className="w-5 h-5 outline-none"/>}</button>
        </form>
    )
}

export default SearchInput
