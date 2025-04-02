import TopNavbarComponent from "@/components/TopBarComponent";
import "../globals.css";
import Logo from "@/components/logo";
import WorkSpace from "@/components/WorkSpace";
import CardComponent from "@/components/card";

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Somphors",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
        <div className="container mx-auto my-12 ">
          <div className="grid grid-cols-12">
            <div className="col-span-3"></div>
            <div className="col-span-9"><TopNavbarComponent />
              <div className="h-0.5 w-full bg-gray-200" ></div>
            </div>
          </div>
          <div className=" flex gap-30">
            <div className="space-y-10">
              <Logo />
              <WorkSpace />
            </div>
            <div>
              <CardComponent/>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
