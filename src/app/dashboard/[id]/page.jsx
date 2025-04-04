import CardComponent from '@/components/card';
import { getAllTask } from '@/service/cardService'
import React from 'react'

export default async function page({ params }) {
    const { id } = await params
    const taskList = await getAllTask(id);
    console.log("task", taskList);

    return (
        <div>
            <CardComponent taskList={taskList}/>
        </div>
    )
}
