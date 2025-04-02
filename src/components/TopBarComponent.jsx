import { ChevronRight } from "lucide-react";
import { Bell } from "lucide-react";


export default function TopNavbarComponent() {


    return (
        <div className="flex justify-between items-center ">
            <div className="flex gap-6">
                <div>Workspace</div>
                <ChevronRight />
                <div>HRD Design</div>
            </div>

            <div className="flex items-center">
                {/* notification bell */}
                <div className="relative w-12 h-12 bg-white p-2.5 rounded-full ">
                    <Bell className="w-7 h-7 text-primary-text" />
                    {/* red dot */}
                    <div className="bg-red-600 w-2.5 h-2.5 rounded-full absolute top-2 right-3"></div>
                </div>

                {/* profile image */}
                <div className="h-16 rounded-xl  bg-white py-2.5 px-6 flex gap-3 items-start ">
                    <img
                        src="/p1.jpg"
                        alt="profile image"
                        width={45}
                        height={45}
                        className="rounded-full"
                    />

                    {/* username and email */}
                    <div>
                        <p className="capitalize text-base">dark moon</p>
                        <p className="text-gray-400 text-sm">darkmoon@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
