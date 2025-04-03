import { SquarePlus } from 'lucide-react'
import React from 'react'

export default function NewTaskComponent() {
    return (
        <div className="fixed bottom-4 right-17">
            <button className="flex items-center gap-2 bg-blue-500 text-white rounded-2xl px-4 py-2 shadow-md hover:bg-blue-600 transition-colors">
                <SquarePlus size={18} />
                <span className="text-sm font-medium">New Task</span>
            </button>
        </div>
    )
}