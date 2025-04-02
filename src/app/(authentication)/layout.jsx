import TopNavbarComponent from "@/components/TopBarComponent";
import "../globals.css";
import Logo from "@/components/logo";

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
        <div className="container mx-auto my-12 flex justify-between">
        <Logo />
        </div>
        {children}
      </body>
    </html>
  );
}
