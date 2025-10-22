
import { FaRegUserCircle } from 'react-icons/fa'
import './App.css'
import { MdNotificationsNone } from 'react-icons/md'
import { GoSearch } from 'react-icons/go'
import Pannel from './Pannel'


function App() {
  return (
    <div className='main  flex-col'>
      <div className="navbar  w-full flex justify-between items-center p-3 h-17">
        <div className="logo text-2xl font-bold uppercase">hosting</div>
        <div className="searchbar flex items-center border px-4 py-2 rounded-lg gap-3">
        <GoSearch /> <input type="text" placeholder='Search...' className='outline-none'/> 
        </div>
        <div className="user flex items-center ">
          <MdNotificationsNone className='text-2xl'/>
          <FaRegUserCircle className='text-xl ml-2'/>
        </div>
      </div>
      <Pannel/>
      {/* <div className="pcontainersad h-full flex border ">
        <div className="sidebar w-1/4 border-r p-4">
          Sidebar
        </div>
        <div className="content w-3/4 p-4">
          Content Area
        </div>
      </div> */}
    </div>
  )
}

export default App
