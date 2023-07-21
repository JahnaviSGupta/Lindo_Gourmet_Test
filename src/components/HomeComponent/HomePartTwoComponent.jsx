import { useEffect, useState } from "react";
import BasicExample from "../Helpers/Cards/Category";

function HomePartTwoComponent() {
  const exampleData = [
    { id: 1, text: 'Example 1' },
    { id: 2, text: 'Example 2' },
    { id: 3, text: 'Example 3' },
    { id: 4, text: 'Example 4' },
    { id: 5, text: 'Example 5' },
    { id: 6, text: 'Example 6' },
    { id: 7, text: 'Example 7' },
    { id: 8, text: 'Example 8' },
    { id: 9, text: 'Example 9' },
    { id: 10, text: 'Example 10' },
    { id: 11, text: 'Example 11' },
    { id: 12, text: 'Example 12' },
    { id: 13, text: 'Example 13' },
    { id: 14, text: 'Example 14' },
    { id: 15, text: 'Example 15' },
    { id: 16, text: 'Example 16' },
    { id: 17, text: 'Example 17' },
    { id: 18, text: 'Example 18' },
    { id: 19, text: 'Example 19' },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const maxCardCount = 10;

  const handleScroll = (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    const scrollableDistance = scrollWidth - clientWidth;
    const scrollPercentage = (scrollLeft / scrollableDistance) * 100;

    setScrollPosition(scrollPercentage);
  }

  useEffect(()=>{
    const content = document.getElementById('content');
    content.addEventListener('scroll',handleScroll);

    return () =>{
      content.removeEventListener('scroll', handleScroll);
    };
  },[]);

  return (
    <div>
      <div className="flex flex-row">
        <h1 className="flex-[6] font-600 mb-[30px] text-[40px]">Products</h1>
        <div className="">
          <button className='justify-end bg-qyellow rounded-lg text-white px-[60px] py-[12px] font-600'>More</button>
        </div>
      </div>
      <div className="homepage-middle-bar">
        <div id="content" className="flex flex-row nowrap overflow-x-auto space-x-[30px] product-items" >
          {exampleData.slice(0,maxCardCount).map((example) => (
          <div key={example.id} className="mt-[10px] mb-[50px]">
            <BasicExample text={example.text} />
          </div>
        ))}
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="w-[80%] h-[3px] bg-[#f1f1f1]">
          <div className="w-[50%] h-[3px] bg-[#8e8e8e]" 
            style={{
              transform: `translateX(${scrollPosition}%)`
            }}
          >
          </div>
        </div>
      </div>
    </div>

  );
}

export default HomePartTwoComponent;
