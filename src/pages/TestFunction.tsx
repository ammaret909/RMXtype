import { useNavigate } from "react-router-dom";

export function TestFunction() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="submit"
        className="btn text-xl"
        onClick={() => {
          navigate("/home");
        }}
      >
        &larr;
      </button>
      <div className="grid grid-cols-1 text-zinc-600 text-sm ">
        <div className="rounded-box shadow-xl p-6 row m-2 grid grid-cols-12 bg-slate-50">
          <div className="text-xl ml-4 col-span-10 flex items-center">
            Create Page
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 sm:grid-cols-3 ounded-box h1">
        <div
          className=" btn shadow-md bg-[#6d8aaa] hover:bg-[#607a96] m-2 p-10 grid content-center"
          onClick={() => {
            navigate("/page/asp");
          }}
        >
          <div className=" text-sm text-white">Post ASP File</div>
        </div>

        <div
          className=" btn shadow-md bg-[#6d8aaa] hover:bg-[#607a96] m-2 p-10 grid content-center"
          onClick={() => {
            navigate("/page/create");
          }}
        >
          <div className=" text-sm text-white">Create Page</div>
        </div>

        <div
          className=" btn shadow-md bg-[#6d8aaa] hover:bg-[#607a96] m-2 p-10 grid content-center"
          onClick={() => {
            navigate("/page/search");
          }}
        >
          <div className=" text-sm text-white">Search Page</div>
        </div>
      </div>

      <div className="grid grid-cols-1 text-zinc-600 text-sm mt-4">
        <div className="rounded-box shadow-xl p-6 row m-2 grid grid-cols-12 bg-slate-50">
          <div className="text-xl ml-4 col-span-10 flex items-center">
            Create Massage
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 ounded-box h1">
        <div
          className=" btn shadow-md bg-[#6d8aaa] hover:bg-[#607a96] m-2 p-10 grid content-center"
          onClick={() => {
            navigate("/massage/create");
          }}
        >
          <div className=" text-sm text-white">Create Massage</div>
        </div>

        <div
          className=" btn shadow-md bg-[#6d8aaa] hover:bg-[#607a96] m-2 p-10 grid content-center"
          onClick={() => {
            navigate("/massage/search");
          }}
        >
          <div className=" text-sm text-white">Search Massage</div>
        </div>
      </div>
    </div>
  );
}
