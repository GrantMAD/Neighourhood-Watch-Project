import { useEffect } from "react";

const SignUpPage = (props) => {
  useEffect(() => {
    if (props.funcNav) {
      props.funcNav(false)
    }
  })
    return (
        <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
          <section class="flex w-[30rem] flex-col space-y-10">
            <div class="text-center text-4xl font-medium">Sign In</div>
                <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                    <input
                        type="text"
                        placeholder="Email or Username"
                        class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                    />
                </div>
        
                <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                  <input
                    type="password"
                    placeholder="Password"
                    class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                  />
                </div>
            
                <button 
                  class="transform rounded-lg bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-700"
                  >
                  LOG IN
                </button>
        
            <a
              href="/#"
              class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
              >FORGOT PASSWORD?</a
            >
            <a
              href="SignUpPage"
              class="transform text-center font-semibold text-indigo-600 duration-300 hover:text-gray-300"
              >Sign Up</a
            >
          </section>
        </main>
    )
}

export default SignUpPage;