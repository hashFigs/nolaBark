import { useRef } from 'react';
import Image from 'next/image';

export default function MailChimp() {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    // this is where your mailchimp request is made

    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    });
  };

  return (

  
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">               
        <div className="flex justify-center p-5 text-6xl">
        <Image
                priority
                className=''
                src={'/images/collie.jpg'}
                height={'500'}
                width={'500'}
                alt={'email'}
            /> 
     
        </div>
        
        <div className="flex justify-center p-05 text-6xl">
            <form 
                onSubmit={subscribeUser}
                className="rounded-lg  flex flex-col px-8 py-4 bg-white dark:bg-blue-500">
                
                <label htmlFor="email-input" class="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 dark:text-white mb-4 text-center xl:text-left md:mt-0 mt-4">
                    Subscribe
                </label>

                <input
                    type="email"
                    id="email-input"
                    name="email"
                    placeholder="your best email"
                    ref={inputRef}
                    required
                    autoCapitalize="off"
                    autoCorrect="off"
                />

                <button 
                    type="submit" 
                    value="" 
                    name="subscribe"
                    className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                    Subscribe
                </button>
                </form>
            </div>
    </div>
  );
}