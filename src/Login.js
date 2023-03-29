const Login = () => {
    return (
      <div>
        <div className="flex flex-col  md:h-auto justify-evenly md:flex-row items-center mt-52 ">
        <div className="flex flex-col justify-center">
          <p className="p-2 md:text-6xl font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl">Digital</p>
          <p className="p-2 md:text-6xl font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl">Dream</p>
          <p className="p-2 md:text-6xl font-bold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl">Creations</p>
          <p  className="px-2 my-3 text-3xl "> Frame every moment.</p>
          
        </div>
        <form className="flex flex-col gap-5 justify-center items-start " >
        <label className="font-bold">Email address</label>
        <input className="ml-4 p-2 rounded-[0.4rem] border" name="email" type="email" ></input>
        <label className="font-bold">Password</label>
        <input className="ml-4 p-2 rounded-[0.4rem] border"type="text" name="password" ></input>
        <div className="flex justify-center mt-8">
              <button className="bg-black hover:bg-white text-white hover:text-black border hover:border-black  px-8 py-2 rounded-full ml-14">Login</button>
            </div>
        </form>
        </div> 
      </div>

      
     );
}
 
export default Login;