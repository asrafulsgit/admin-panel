import React from 'react'

const vendorData = [
  {
    date: 'Jul 5, 2025',
    name: 'Guy Hawkins',
    location: '6391 Elgin St. Celina',
    number: '(303) 555-0105',
    action: 'See Details'
  },
  {
    date: 'Jul 7, 2025',
    name: 'Ronald Richards',
    location: '6391 Elgin St. Celina',
    number: '(239) 555-0108',
    action: 'See Details'
  },
  {
    date: 'Jul 8, 2025',
    name: 'Kristin Watson',
    location: '6391 Elgin St. Celina',
    number: '(316) 555-0116',
    action: 'See Details'
  },
  {
    date: 'Jul 9, 2025',
    name: 'Theresa Webb',
    location: '6391 Elgin St. Celina',
    number: '(270) 555-0117',
    action: 'See Details'
  },
  {
    date: 'Jul 10, 2025',
    name: 'Floyd Miles',
    location: '6391 Elgin St. Celina',
    number: '(603) 555-0123',
    action: 'See Details'
  },
  {
    date: 'Jul 12, 2025',
    name: 'Brooklyn Simmons',
    location: '6391 Elgin St. Celina',
    number: '(319) 555-0115',
    action: 'See Details'
  },
  {
    date: 'Jul 14, 2025',
    name: 'Esther Howard',
    location: '6391 Elgin St. Celina',
    number: '(405) 555-0128',
    action: 'See Details'
  },
  {
    date: 'Jul 15, 2025',
    name: 'Dianne Russell',
    location: '6391 Elgin St. Celina',
    number: '(207) 555-0119',
    action: 'See Details'
  },
  {
    date: 'Jul 15, 2025',
    name: 'Kathryn Murphy',
    location: '6391 Elgin St. Celina',
    number: '(629) 555-0129',
    action: 'See Details'
  }
];

const AllVendor = () => {
  return (
    <>
    <div className="mt-7">

    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
      <h2 className="text-[26px] font-semibold  md:mb-0">All vendor list</h2>
      <div className="relative w-full md:w-auto">
        <input 
  type="text" 
  placeholder="Search for something" 
  className="pl-10 pr-4 py-2 rounded-[100px] w-full md:w-64  bg-white
         shadow-sm focus:outline-none"
/>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>

    <div className="overflow-x-auto rounded-lg p-2">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-2 py-3 text-left  font-normal uppercase tracking-wider">Date</th>
            <th scope="col" className="px-2 py-3 text-left  font-normal uppercase tracking-wider">Name</th>
            <th scope="col" className="px-2 py-3 text-left  font-normal uppercase tracking-wider">Location</th>
            <th scope="col" className="px-2 py-3 text-left  font-normal uppercase tracking-wider">Number</th>
            <th scope="col" className="px-2 py-3 text-left  font-normal uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody >
  {vendorData.map((item, index) => (
    <tr
      key={index}
      className="odd:bg-transparent even:bg-white"
    >
      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">{item.date}</td>
      <td className="px-3 py-4 whitespace-nowrap text-sm">{item.name}</td>
      <td className="px-3 py-4 whitespace-nowrap text-sm">{item.location}</td>
      <td className="px-3 py-4 whitespace-nowrap text-sm">{item.number}</td>
      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium">
        <button className="bg-[#FF8C00] font-medium text-sm w-full py-2 px-4 rounded-[10px]">
          See Details
        </button>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>

</div>
    
    </>
  )
}

export default AllVendor;
