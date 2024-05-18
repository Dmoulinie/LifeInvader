import React, { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const ModalUser = ({ showModal, setShowModal, closeModal }) => {
    {/* Dialog Modal - Plus */}
    return (
        <div>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="block mx-auto xl:w-4/12 md:w-8/12 w-full">
                    <div className="transition-transform duration-500 hover:scale-[1.04] scale-100 relative px-5 py-16 border w-full h-fit shadow-lg rounded-md bg-white mx-auto">
                        WELCOME !
                    </div>
                    <div className="mt-8 flex justify-center">
                            <button
                                onClick={() => closeModal()}
                                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-3 py-2 
                            bg-sky-600 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                            focus:ring-sky-500"
                            >
                                Fermer
                            </button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ModalUser;