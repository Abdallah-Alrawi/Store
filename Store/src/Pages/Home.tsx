
export function Home(){
   
    return (
       
        <>
     
        <div className="d-flex align-items-center justify-content-center text-light">
        <h1>Welcome to The store where you will meet all your tech needs</h1>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5 text-warning">
            <h2>Click The button below to start your journey</h2>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-2">
            <img src='https://i.pinimg.com/736x/a1/e5/cb/a1e5cb750fbad2d269923b0c6b0bd918.jpg' className='img-fluid shadow-4'/>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-5">
            <a href="/store" className="btn btn-success" role="button">The Store</a>
        </div>
        
        </>
       
    )
}