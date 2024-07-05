import { IoCafeOutline } from 'react-icons/io5';

export const SimpleWidget = () => {
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2 my-2">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-600 text-center">Counter</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">
              <IoCafeOutline size={50} />
            </div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl">Title</h4>
              <p className="text-xs text-gray-500">Subtitle</p>
            </div>
          </div>
        </div>
        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
          <a href="#" className="text-indigo-600 text-xs font-medium">
            More
          </a>
        </div>
      </div>
    </div>
  );
};
