'use client';
import { workSpaceAction } from '@/actions/workSpaceAction';
import { X } from 'lucide-react';
import { useActionState, useEffect } from 'react';

export default function WorkSpacePopUpComponent({ onClose, onWorkspaceCreated }) {
  const [state, formAction, pending] = useActionState(workSpaceAction, {
    success: false,
    message: null,
  });


  useEffect(() => {
    if (state?.success) {
      onWorkspaceCreated(state.workspace);
      onClose();
    }
  }, [state?.success])

  return (
    <div className="fixed inset-0 bg-gray-700/70 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Create New Workspace</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <form action={formAction}>
          <div className="mb-4">
            <label htmlFor="workspaceName" className="block text-sm font-medium text-gray-700 mb-1">
              Workspace Name
            </label>
            <input
              type="text"
              id="workspaceName"
              name="workspaceName"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {state?.error && (
            <p className="text-red-500 text-sm mb-4">{state.error}</p>
          )}

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              disabled={pending}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
              disabled={pending}
            >
              {pending ? 'Creating...' : 'Create Workspace'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}