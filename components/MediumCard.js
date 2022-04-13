import Image from "next/image";

const MediumCard = ({img,title}) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out" >


    <div className="relative h-80 w-80">

      <Image src={img} layout='fill' className="rounded-xl" />
    </div>
    <h3 className="text-2xl font-semibold mt-3">{title}</h3>


    </div>
  );
}

export default MediumCard;