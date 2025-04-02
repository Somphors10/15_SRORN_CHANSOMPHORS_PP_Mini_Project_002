// Workspace component
import { getAllWorkSpace } from '@/service/workspaceService'
import { Ellipsis,  SquarePlus } from 'lucide-react';
import React from 'react'

export default async function WorkSpace() {
    const workspaces = await getAllWorkSpace();


    return (
        <div className='w-full'>
            <div className='flex gap-8 items-center mb-4 text-gray-400'>
                <h1 className="text-2xl  font-bold">Workspaces</h1>
                <SquarePlus />
            </div>

            <div className="space-y-2">
                {workspaces?.payload?.map((workspace) => (
                    <div key={workspace?.workspaceId} >
                        <div className="flex justify-between">
                            <div className='flex gap-4 items-center'>
                                <div className='w-2 h-2 rounded-2xl bg-red-500'></div>
                                <h2 className="font-medium">{workspace?.workspaceName}</h2>
                            </div>
                            <div><Ellipsis /></div>
                        </div>
                        <p className="text-sm text-gray-500">{workspace?.isFavorite}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}