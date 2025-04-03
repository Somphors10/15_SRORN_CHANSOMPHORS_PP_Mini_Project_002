import { getAllTask } from '@/service/cardService'
import React from 'react'

export default async function page() {
    const taskList = await getAllTask();
    console.log("task", taskList);

    return (
        <div>page</div>
    )
}
