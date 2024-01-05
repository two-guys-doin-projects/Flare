import DisplayTable from "../components/DisplayTable";
import Loading from "../components/Loading";
import DisplayTableCSV from "./DisplayTableCSV";

export default function DatasetSearchList({
    handleSubmit,
    availableDatasets,
    searching,
    searchName,
    setSearchName,
    clickedDataset,
    setClickedDataset,
    handleSubmitDownload,
    downloadedColumnsName,
    downloadedDatasets
}) {
    return (
        <div className="max-w-screen-xl mx-auto pt-20">
            <form onSubmit={handleSubmit}>
            <label htmlFor="search" className="mb-2 text-sm font-medium text-black-900 sr-only dark:text-black">
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-black-500 dark:text-black-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
                </div>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} 
                className="block w-full p-4 ps-10 text-sm text-black-900 border border-green-300 rounded-lg bg-green-50 focus:ring-white-500 focus:border-green-500 dark:bg-white-700 dark:border-green-600 dark:placeholder-black-800 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Search"/>
                <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                Search
                </button>
                
            </div>
            </form>
            {searching ? (
          <Loading />
        ) : (
          <>
            {downloadedDatasets.length === 0 ?
            availableDatasets.length !== 0 ? (
                <> 
                    <DisplayTable
                      headers={["Index", "Dataset Name", "Description"]}
                      items={availableDatasets}
                      clickedDataset={clickedDataset}
                      setClickedDataset={setClickedDataset}
                    /> 
                    <br></br>
                    <button
                        type="submit"
                        className="text-white max-w-screen-xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={handleSubmitDownload}
                        >
                        Download
                    </button>
                </>
            ) : (
              <p>Search for something</p>
            ): <><DisplayTableCSV
            headers={downloadedColumnsName}
            items={downloadedDatasets}
            clickedDataset={clickedDataset}
            setClickedDataset={setClickedDataset}
          /> <button
          type="submit"
          className="text-white max-w-screen-xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={handleSubmitDownload}
          >
          Delete columns
      </button></>}
          </>
        )}
      </div>
    )
}