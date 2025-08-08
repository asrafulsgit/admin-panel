import React, { useState } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';

const AddNewAdminSection = () => {
  const [permissions, setPermissions] = useState({
    viewVendorProfiles: true,
    approveRejectVendorApps: false,
    viewStoreSetup: true,
    approveRejectVendorProducts: true,
    viewVendorProfiles2: true, // Assuming this is a typo and should be unique
    approveRejectDriverApps: false,
    viewDriverApplications: true,
    verifyDriverDocuments: true,
    suspendDriver: true,
    viewDriverProfiles: true,
  });

  const handlePermissionToggle = (permission) => {
    setPermissions(prevPermissions => ({
      ...prevPermissions,
      [permission]: !prevPermissions[permission],
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Create New Role</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name</label>
            <input
              type="text"
              id="userName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
              defaultValue="Nguyen, Shane"
            />
          </div>
          <div>
            <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="emailAddress"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
              defaultValue="sara.cruz@example.com"
            />
          </div>
          <div className="relative">
            <label htmlFor="accessAction" className="block text-sm font-medium text-gray-700">Access Action</label>
            <select
              id="accessAction"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm appearance-none pr-10 px-3 py-2 border"
              defaultValue="Admin"
            >
              <option>Admin</option>
              <option>Editor</option>
              <option>Viewer</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pt-6 text-gray-700">
              {/* <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4 text-gray-800">Assign permissions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Vendor</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span>View Vendor Profiles</span>
                <div
                  onClick={() => handlePermissionToggle('viewVendorProfiles')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${permissions.viewVendorProfiles ? 'bg-green-500' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${permissions.viewVendorProfiles ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span>Approve/Reject Vendor Applications</span>
                <div
                  onClick={() => handlePermissionToggle('approveRejectVendorApps')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${permissions.approveRejectVendorApps ? 'bg-green-500' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${permissions.approveRejectVendorApps ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span>View Store Setup</span>
                <div
                  onClick={() => handlePermissionToggle('viewStoreSetup')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${permissions.viewStoreSetup ? 'bg-green-500' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${permissions.viewStoreSetup ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span>Approve/Reject Vendor Products</span>
                <div
                  onClick={() => handlePermissionToggle('approveRejectVendorProducts')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${permissions.approveRejectVendorProducts ? 'bg-green-500' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${permissions.approveRejectVendorProducts ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span>View Vendor Profiles</span>
                <div
                  onClick={() => handlePermissionToggle('viewVendorProfiles2')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${permissions.viewVendorProfiles2 ? 'bg-green-500' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${permissions.viewVendorProfiles2 ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Driver</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span>Approve/Reject Driver Applications</span>
                <div
                  onClick={() => handlePermissionToggle('approveRejectDriverApps')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${permissions.approveRejectDriverApps ? 'bg-green-500' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${permissions.approveRejectDriverApps ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span>View Driver Applications</span>
                <div
                  onClick={() => handlePermissionToggle('viewDriverApplications')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${permissions.viewDriverApplications ? 'bg-green-500' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${permissions.viewDriverApplications ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span>Verify Driver Documents</span>
                <div
                  onClick={() => handlePermissionToggle('verifyDriverDocuments')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${permissions.verifyDriverDocuments ? 'bg-green-500' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${permissions.verifyDriverDocuments ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span>Suspend Driver</span>
                <div
                  onClick={() => handlePermissionToggle('suspendDriver')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${permissions.suspendDriver ? 'bg-green-500' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${permissions.suspendDriver ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span>View Driver Profiles</span>
                <div
                  onClick={() => handlePermissionToggle('viewDriverProfiles')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${permissions.viewDriverProfiles ? 'bg-green-500' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${permissions.viewDriverProfiles ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            className="rounded-md bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewAdminSection;