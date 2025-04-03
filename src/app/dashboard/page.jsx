import React from 'react';
import Logo from "@/components/logo";
import WorkSpace from "@/components/WorkSpace";
import CardComponent from "@/components/card";
import Link from "next/link";
import { LogOut, Star } from "lucide-react";
import TopNavbarComponent from "@/components/TopBarComponent";
import { getAllWorkSpace } from '@/service/workspaceService';
import NewTaskComponent from '@/components/NewTaskComponent';
import FavoriteComponent from '@/components/FavoriteComponent';


export default async function Page() {
  const workspacesData = await getAllWorkSpace();
  // console.log(" fresh worksapce ; ", workspacesData);

  const firstWorkspace = workspacesData?.payload?.[2];

  return (
    <div className="container mx-auto my-2">
      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <div className="col-span-2 mt-14 flex flex-col justify-between h-[calc(95vh-56px)]">
          <div>
            <Logo />
            <div className="mt-12 ml-[-40px] overflow-auto scrollbar-hide h-[240px]">
              <WorkSpace initialWorkspaces={workspacesData} />
            </div>
            <div className=' ml-[-40px] mt-10 '>
              <FavoriteComponent />
            </div>
          </div>
          <div className="mb-4">
            <Link href="/login" className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded ml-[-40px]">
              <LogOut className="text-green-500 w-5 h-5" />
              <span>Logout</span>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-10 pl-12 ">
          <TopNavbarComponent />
          <hr className="my-4" />

          {/* Workspace Header */}
          <div className="mb-6">
            <div className='flex justify-between items-center'>
              <h2 className="text-2xl font-semibold">
                {firstWorkspace?.workspaceName || 'My Workspace'}
              </h2>
              <div className='w-8 h-8 bg-gray-100 rounded-md'>
                <Star className='m-1' />
              </div>
            </div>
          </div>

          {/* Task Columns */}
          <div className="grid grid-cols-12 gap-6 overflow-auto scrollbar-hide h-[460px]">
            {/* Not Started */}
            <div className="col-span-4">
              <div className="mb-4">
                <div className="text-red-500 font-medium">Not Started</div>
                <div className="w-full h-0.5 bg-red-300"></div>
              </div>
              <CardComponent status="not-started" workspaceId={workspacesData} />
            </div>

            {/* In Progress */}
            <div className="col-span-4">
              <div className="mb-4">
                <div className="text-yellow-500 font-medium">In Progress</div>
                <div className="w-full h-0.5 bg-yellow-300"></div>
              </div>
              <CardComponent status="in-progress" workspaceId={workspacesData}/>
            </div>

            {/* Completed */}
            <div className="col-span-4">
              <div className="mb-4">
                <div className="text-green-500 font-medium">Finished</div>
                <div className="w-full h-0.5 bg-green-300"></div>
              </div>
              <CardComponent status="completed" workspaceId={workspacesData}/>
              <CardComponent status="completed" />
            </div>
          </div>
          <div className="col-span-10 flex justify-end mb-4 ">
            <NewTaskComponent />
          </div>
        </div>
      </div>
    </div>
  );
}