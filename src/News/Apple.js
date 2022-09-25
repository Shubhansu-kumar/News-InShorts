import React from 'react'

export default function Apple() {
    let [data, setData] = useState([]);
    useEffect(() => {
      fetch(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=f6ce4b5880c6484997b23d998a3fda5b`
      )
        .then((rest) => rest.json())
        .then((rest) => setData(rest.articles));
    });
  
    return (
            <div className="p-10 bg-[#e7ead3] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
              {data.map((items) => {
                return (
                  <div className="rounded bg-[#e7e1e2] overflow-hidden shadow-lg">
                    <img
                      className="w-full"
                      src={items.urlToImage}
                      alt="bitcoin"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{items.title}</div>
                      <p className="text-gray-700 text-base">
                        {items.description}
                        <button className=" text-red-600 ">
                          <a href={items.url}>........Read More</a>
                        </button>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
    );
}
