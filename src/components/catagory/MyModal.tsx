import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { allColors } from '../constants/color';
import { allCategories } from '../constants/staticData'

interface Props {
  setIsOpen: Function
  isOpen: boolean

}
export default function MyModal(props: Props) {

  function closeModal() {
    props.setIsOpen(false)
  }
  function openModal() {
    props.setIsOpen(true)
  }
  return (
    <>

      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  <div className='grid grid-cols-6'>
                    <p className='col-span-1 font-semibold text-base' style={{ color: allColors.blackDark }}>Filter</p>
                    <div className='col-span-4'>
                      <p className='flex justify-center items-center w-6 h-6 rounded-full' style={{ color: "white", background: allColors.purpelDark, padding: "4px", fontSize: "14px" }}>2</p>
                    </div>
                    <MdOutlineClose onClick={() => props.setIsOpen(false)} className='col-span-1 absolute right-4 text-xl' style={{ color: allColors.blackLight }} />

                  </div>

                </Dialog.Title>
                <div className="mt-2">
                  <div className='flex gap-8'>
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-primary " />
                    <p className='text-base font-semibold' style={{ color: allColors.blackDark }}>All Experiences</p>
                  </div>

                  {allCategories[0].subcategories.map((item)=>{
                    return(
                      <div className='grid grid-cols-8 items-center gap-2 mt-4'>

                    <div className='col-span-1'>

                      <input type="checkbox" className="checkbox checkbox-sm checkbox-primary mt-2" />

                    </div>
                    <div className='col-span-1'>

                      <div className='h-12 w-12 rounded-full flex justify-center items-center' style={{ background: item.darkcolor }}>
                        <img src={item.imgSrc} alt='error' className='rounded-lg' style={{ width:"25px" , height:"20px"}} />
                      </div>

                    </div>
                    <div className='col-span-6'>

                      <p className='font-semibold text-base ml-10' style={{ color: allColors.blackDark }}>{item.name}</p>

                    </div>

                  </div>
                    )
                  })}



                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}