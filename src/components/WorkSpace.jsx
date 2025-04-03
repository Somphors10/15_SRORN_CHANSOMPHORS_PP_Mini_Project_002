'use client';
import { useEffect, useState } from 'react';
import { Ellipsis, SquarePlus } from 'lucide-react';
import WorkSpacePopUpComponent from './WorkSpacePopUpComponent';

export default function WorkSpace({ initialWorkspaces }) {
  const [workspaces, setWorkspaces] = useState();
  const [showPopup, setShowPopup] = useState(false);


  const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces?.id);

  const handleWorkspaceCreated = (newWorkspace) => {
    setWorkspaces(prev => [...prev, newWorkspace]);
    setShowPopup(false);
  };

  const handleSelectWorkspace = (id) => {
    setSelectedWorkspace(
      initialWorkspaces?.payload?.map((item) => item.workspaceId === id)
      
    );


    setSelectedWorkspace(id);
    console.log("Selected workspace ID:", selectedWorkspace);
  };

  useEffect(() => {
    setWorkspaces(initialWorkspaces?.payload || [])
  }, [initialWorkspaces?.payload])


  return (
    <div className='w-full'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className="text-xl font-semibold text-gray-700">Workspaces</h1>
        <button
          onClick={() => setShowPopup(true)}
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Create new workspace"
        >
          <SquarePlus size={20} />
        </button>
      </div>

      <div className="space-y-2 max-h-[60vh] overflow-y-auto">
        {workspaces?.map((workspace) => (
          <div
            key={workspace.workspaceId}
            className={`p-2 rounded cursor-pointer transition-colors ${selectedWorkspace === workspace.workspaceId
              ? 'bg-gray-100 border border-gray-200'
              : 'hover:bg-gray-50'
              }`}
            onClick={() => handleSelectWorkspace(workspace.workspaceId)}
          >
            <div className="flex justify-between items-center">
              <div className='flex gap-3 items-center'>
                <div className={`w-2 h-2 rounded-full ${workspace.isFavorite ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                <span className="font-medium text-gray-700">
                  {workspace.workspaceName}
                </span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <Ellipsis size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <WorkSpacePopUpComponent
          onClose={() => setShowPopup(false)}
          onWorkspaceCreated={handleWorkspaceCreated}
        />
      )}
    </div>
  );
}