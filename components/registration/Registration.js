import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import style from "./Registration.module.css";

export default function MyModal({ open, close }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(close);
  };

  const openModal = () => {
    setIsOpen(open);
  };

  return (
    <>
      <button
        className="button-primary px-16 py-3 text-base md:text-lg"
        onClick={openModal}
      >
        Register
      </button>

      <Transition appear show={isOpen} as={Fragment}>
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
                <Dialog.Description
                  as="h3"
                  className="text-sm font-normal leading-6 text-gray-800 text-center"
                >
                  Enter the required information to register for this event
                </Dialog.Description>
                <div className="mt-5">
                  <form>
                    <main>
                      <section className="space-y-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="block text-sm text-gray-800"
                          >
                            Name <span className="text-red-400"> *</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="outline-none p-2 shadow rounded w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="block text-sm text-gray-800"
                          >
                            Email <span className="text-red-400"> *</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="outline-none p-2 shadow rounded w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="tel"
                            className="block text-sm text-gray-800"
                          >
                            Tel<span className="text-red-400"> *</span>
                          </label>
                          <input
                            type="tel"
                            name="tel"
                            id="tel"
                            className="outline-none p-2 shadow rounded w-full"
                          />
                        </div>
                      </section>
                      <section>
                        <div className="space-y-2 my-5">
                          <label
                            htmlFor="cv"
                            className="block text-sm text-gray-800"
                          >
                            CV <span className="text-red-400"> *</span>
                          </label>
                          <div className="flex shadow rounded-tl rounded-bl">
                            <input
                              type="file"
                              name="file"
                              id="cv"
                              accept=".pdf"
                              placeholder="choose a file"
                              className={`outline-none p-3 w-full text-xs cursor-pointer transition ease-in duration-200 hover:border-solid text-gray-800 ${style.upload}`}
                            />
                            <button className="py-2 px-5 bg-gold text-sm rounded-tr rounded-br">
                              upload
                            </button>
                          </div>
                        </div>
                        <div className="space-y-2 my-5">
                          <label
                            htmlFor="video"
                            className="block text-sm text-gray-800"
                          >
                            Video <span className="text-red-400"> *</span>
                          </label>
                          <div className="flex shadow rounded-tl rounded-bl">
                            <input
                              type="file"
                              name="file"
                              id="video"
                              accept="video/*"
                              placeholder="choose a file"
                              className={`outline-none p-3 w-full text-xs cursor-pointer transition ease-in duration-200 hover:border-solid text-gray-800 ${style.upload}`}
                            />
                            <button className="py-2 px-5 bg-gold text-sm rounded-tr rounded-br">
                              upload
                            </button>
                          </div>
                        </div>
                      </section>
                    </main>
                  </form>
                </div>

                <div className="mt-10 flex justify-between items-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-gray-300 border border-transparent rounded-md hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-yellow-200 border border-transparent rounded-md hover:bg-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setValue(50)}
                  >
                    Register
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
