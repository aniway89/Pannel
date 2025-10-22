
import { GoCreditCard, GoHome, GoNote, GoServer } from 'react-icons/go'
import { MdOutlineManageAccounts } from 'react-icons/md'
import ToggleSection from './Toggel'

function Pannel() {
  return (
    <div className="pannel border w-full h-full flex justify-between pt-16">
      <div className="sidepannel flex-col p-4">
      <div className="side-butens flex-col">
        <div className="custom-buttons cursor-pointer flex items-center gap-3 p-3  font-semibold mb-2">
         <GoHome className='text-2xl '/> Home
        </div>
        <div className="custom-buttons cursor-pointer flex items-center gap-3 p-3  font-semibold mb-2">
         <GoNote  className='text-2xl '/> Website
        </div>
        <div className="custom-buttons cursor-pointer flex items-center gap-3 p-3  font-semibold mb-2">
         <GoServer className='text-2xl '/> VPS
        </div>
        <div className="custom-buttons cursor-pointer flex items-center gap-3 p-3  font-semibold mb-2">
         <GoCreditCard  className='text-2xl '/> Billing
        </div>

      </div>
      <div className="user-setting flex items-center  p-1 gap-2 cursor-pointer  font-semibold">
        <MdOutlineManageAccounts className='text-2xl'/> Account setting
      </div>
      </div>
      <div className="main-containers flex justify-center pt-5">
        <div className="flex-col w-4/5  ">
          <div className="text-xl font-semibold mb-9 w-full text-left">
            Hello, User!
          </div>
          <ToggleSection title="Domains" defaultOpen={true}>
          <p>Your content here</p>
        </ToggleSection>

        </div>
      </div>
    </div>
  )
}

export default Pannel
