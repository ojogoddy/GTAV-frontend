import React, { ReactNode } from 'react'
import { MdCancel } from 'react-icons/md'

interface ModalProps {
    onClose: () => void;
    children: ReactNode;
    isVisible: boolean;
  }

const Modal:React.FC<ModalProps> = ({onClose, children, isVisible}:any) => {
if(!isVisible) return null
    return (
    <>
    <div onClick={onClose} aria-hidden="true" className='fixed inset-0 bg-black opacity-80 flex justify-center items-center z-10'></div>
    <div aria-hidden="true" className='bg-[#121212] overflow-hidden z-20  fixed top-[75px] inset-0 mx-auto rounded-lg shadow-sm overflow-y-auto shadow-white w-[94%] h-[85%] '>
         <div className=" flex justify-end rounded-full text-4xl">
          <MdCancel onClick={onClose}  className='fixed mt-6 mr-3' />
          </div>
          <div className="px-16 py-5  ">
                {children}
          </div>
          </div>
    </>
  )
}

export default Modal
