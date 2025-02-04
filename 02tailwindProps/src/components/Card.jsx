

function Card({ user: {name, description} }) {
    
    
  return (
    <div className="max-w-xs rounded-md shadow-md mb-5 bg-black text-gray-100">
        <img
          src="https://images.pexels.com/photos/30492013/pexels-photo-30492013/free-photo-of-photographer-captures-london-street-scene.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="text-gray-400">
              {description}
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            Read more
          </button>
        </div>
      </div>
  )
}

export default Card