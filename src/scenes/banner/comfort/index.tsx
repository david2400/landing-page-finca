import { Image } from 'primereact/image';
import { IComfortProps } from '@interfaces/comfort';

export const Comfort = ({ data }: IComfortProps) => {
  return (
    <div id='comfort' className="flex w-full">
      <div className="w-1/2">
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="flex flex-col w-96 gap-8"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h2 className="text-4xl font-bold tracking-tight italic text-black sm:text-6xl">
              Work with us
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 text-justify">
              Lejos de la ciudad, escuchando la naturaleza y observando un
              atardecer inolvidable capturaras momentos que nos acaras de tu
              memoria.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="w-full grid grid-cols-2 gap-4">
          {data.map(img => (
            <Image
              src={img.url}
              zoomSrc={img.url}
              preview
              className="col-span-2 lg:col-span-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
