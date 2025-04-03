
import { getUserDatial } from "@/service/userDetail";
import { ChevronRight } from "lucide-react";
import { Bell } from "lucide-react";

export default async function TopNavbarComponent() {
    const response = await getUserDatial();
    const currentUser = response?.payload;

    return (
        <div className="flex justify-between items-center">
            {/* Workspace Navigation */}
            <div className="flex gap-6 items-center">
                <div>Workspace</div>
                <ChevronRight size={16} />
                <div>HRD Design</div>
            </div>

            {/* User Controls */}
            <div className="flex items-center gap-4">
                {/* Notification Bell */}
                <div className=" w-10 h-10 bg-white p-2 rounded-full flex ml-4">
                    <Bell className="w-6 h-6 text-primary-text" />
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-3 bg-white rounded-xl  py-2">
                    <img
                        src={currentUser.profile}
                        alt="User profile"
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-gray-100"
                    />
                    <div>
                        <p className="font-medium  capitalize">
                            {currentUser.username}
                        </p>
                        <p className="text-gray-500 ">
                            {currentUser.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}