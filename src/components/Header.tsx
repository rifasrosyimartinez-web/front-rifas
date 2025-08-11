import ImageSlider from "./Slider";

interface Props {
  name: string;
  description: string;
  images: string[];
  ticketPrice: number;
}

function HeaderPage({ name, description, images, ticketPrice }: Props) {
  return (
    <div className="flex flex-col w-full mx-auto justify-center items-center p-8 pb-12 md:w-2/3">
      <div className="flex flex-col text-center mb-6">
        <p className="text-5xl md:text-6xl uppercase font-bebas font-bold bg-gradient-to-r from-[#ff9f1c] via-[#ffbf00] to-[#ff7f11] bg-clip-text text-transparent">
          {name}
        </p>
        <p className="text-xl md:text-2xl uppercase font-bebas font-semibold text-white mb-2">
          {description}
        </p>
        <p className="text-xl font-anton uppercase font-semibold text-white">
          Precio del ticket{" "}
          <span className="bg-gradient-to-r from-[#ff9f1c] via-[#ffbf00] to-[#ff7f11] bg-clip-text text-transparent">
            {ticketPrice}$
          </span>
        </p>
      </div>

      <ImageSlider imagesSlider={images} />
    </div>
  );
}

export default HeaderPage;
