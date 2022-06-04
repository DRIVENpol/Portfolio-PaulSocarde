const stats = [
    { name: 'ERC20 | ERC721 | ERC1155 | Custom Smart Contracts', stat: 'Solidity Programming' },
    { name: 'Next.js | React.js | Ethers.js', stat: 'Web Interfaces' },
    { name: 'Avg. Click Rate', stat: '24.57%' },
  ]
  
  export default function Example() {
    return (
      <div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 mb-20">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
              <dd className="mt-1 text-2xl font-semibold text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    )
  }