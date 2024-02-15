import Logo from '@/assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16 ">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img 
                alt="logo"
                src={Logo}
                />
                <p className="my-5">Maecenas ullamcorper venenatis nisl, sollicitudin fringilla ante tempus finibus. Nunc felis mauris, volutpat et rutrum et, lobortis non sapien. Integer sagittis neque rutrum ornare facilisis. Etiam congue nisi sit amet tellus aliquet lobortis. Aliquam a elit porta, imperdiet tortor quis, auctor risus.</p>
                <p>© Evogym All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
               <h4 className="font-bold">Links</h4> 
               <p className="my-5">Donec tincidunt</p>
               <p className="my-5">Donec tincidunt</p>
               <p className="my-5">Donec tincidunt</p>
               <p>Donec tincidunt imperdie</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
               <h4 className="font-bold">Contact Us</h4> 
               <p className="my-5">Donec tincidunt imperdie onec tincidunt imperdie.</p>
               <p>(444)-327-9402</p>
            </div>
        </div>
    </footer> 
  )
}

export default Footer