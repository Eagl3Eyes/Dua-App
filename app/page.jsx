
import Body from './components/Body/Body';
import Navbar from './components/Navbar/Navbar';

const page = () => {
    return (
        <main>
            <div className="h-screen w-full flex flex-col-reverse md:flex-row bg-customBg xl:p-10 gap-x-6 fixed">
                <div className="basis-[6%] h-full">
                    <Navbar />
                </div>
                <div className='h-full basis-[94%]'>
                    <Body />
                </div>
            </div>
        </main>
    );
};

export default page;