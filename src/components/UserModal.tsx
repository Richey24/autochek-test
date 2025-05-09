import React, { Fragment } from 'react';
import { Dialog, Transition, TransitionChild, DialogTitle } from '@headlessui/react';
import type { User } from './UserList';

interface UserModalProps {
  user: User;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  return (
    <Transition show={!!user} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
        <div className="flex items-center justify-center min-h-screen px-4">
          <span className="inline-block align-middle h-screen" aria-hidden="true">&#8203;</span>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
            leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded shadow-lg p-6 w-full max-w-md align-middle">
              <DialogTitle className="text-lg font-bold mb-2">{user.name}</DialogTitle>
              <div className="mb-2"><span className="font-semibold">Email:</span> {user.email}</div>
              <div className="mb-2"><span className="font-semibold">Company:</span> {user.company.name}</div>
              <div className="mb-2"><span className="font-semibold">City:</span> {user.address.city}</div>
              <div className="mb-2"><span className="font-semibold">Phone:</span> {user.phone}</div>
              <div className="mb-4"><span className="font-semibold">Website:</span> {user.website}</div>
              <button
                onClick={onClose}
                className="mt-2 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                aria-label="Close user details"
              >
                Close
              </button>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UserModal; 