import { FooterLinks } from "@ui/partials";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-start justify-between h-full">
      <div className="w-full padding-6 flex-1 flex-center md:block">
        <div className="w-full flex items-start justify-start md:mt-14">
          <div className="w-fit md:[--font-size:80px] sm:[--font-size:70px] [--font-size:50px] flex items-start flex-col">
            <h1
              style={{
                fontSize: "calc(min(80px, 15vw))",
              }}
              className="uppercase font-extrabold leading-none [font-size:var(--font-size)] text-transparent font-inter bg-clip-text bg-gradient-to-t from-gray to-white"
            >
              Ahmad Hassan
            </h1>
            <div className="h-fit overflow-hidden border border-white w-full p-2">
              <span className="font-fira-sans [font-size:calc(var(--font-size)/2)] text-center md:text-start block font-medium uppercase leading-tight">
                frontend engineer
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-6">
        <FooterLinks />
      </div>
    </div>
  );
}
