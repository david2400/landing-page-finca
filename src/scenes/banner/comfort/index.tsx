import { Image } from 'primereact/image';
import { IComfortProps } from '@interfaces/comfort';

export const Comfort = ({ data }: IComfortProps) => {
  return (
    <div id="comfort" className="grid grid-cols-2 w-full gap-4">
      <div className="col-span-2 sm:col-span-1 w-full">
        <div
          className="flex flex-col w-full gap-6"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h2 className="flex justify-center text-4xl font-bold tracking-tight italic text-black sm:text-6xl">
            Work with us
          </h2>
          <p className="text-lg leading-8 text-gray-600 text-center">
            Lejos de la ciudad, escuchando la naturaleza y observando un
            atardecer inolvidable capturaras momentos que nos acaras de tu
            memoria.
          </p>
        </div>
      </div>
      <div data-aos="fade-left" className="col-span-2 sm:col-span-1 w-full">
        <div className="w-full grid grid-cols-2 gap-4">
          {data.map(img => (
            <Image
              src={img.url}
              zoomSrc={img.url}
              preview
            />
          ))}
        </div>
      </div>
    </div>
  );
};
