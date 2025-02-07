import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()

  return (
    <div className="container mx-auto bg-gray-700 text-white items-center justify-center p-4">
        User: {id}
    </div>
  )
}

export default User