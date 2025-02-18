

function Counter({setCount, count}) {

    

    const increaseCount = () => {
        setCount((p)=> p+1)
    }

  return (
    <>
    <h1>Value: {count}</h1>
    <button onClick={increaseCount}></button>
    </>
  )
}

export default Counter