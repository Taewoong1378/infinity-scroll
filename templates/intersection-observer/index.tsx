import { useEffect, useState } from 'react';

import axios from 'axios';

type RandomImageType = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};
export const IntersectionObserverTemplate = () => {
  const [randomImageList, setRandomImageList] = useState<RandomImageType[]>([]);
  const [page, setPage] = useState(1);

  const [lastIntersectingImage, setLastIntersectingImage] = useState<HTMLDivElement | null>(null);

  const getRandomImageThenSet = async () => {
    console.log('fetching 함수 호출됨');
    try {
      const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=7`);
      setRandomImageList(randomImageList.concat(data));
    } catch {
      console.error('fetching error');
    }
  };

  //observer 콜백함수
  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        //뷰포트에 마지막 이미지가 들어오고, page값에 1을 더하여 새 fetch 요청을 보내게됨 (useEffect의 dependency배열에 page가 있음)
        setPage(prev => prev + 1);
        // 현재 타겟을 unobserve한다.
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    console.log('page ? ', page);
    getRandomImageThenSet();
  }, [page]);

  useEffect(() => {
    //observer 인스턴스를 생성한 후 구독
    let observer: IntersectionObserver;
    if (lastIntersectingImage) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      //observer 생성 시 observe할 target 요소는 불러온 이미지의 마지막아이템(randomImageList 배열의 마지막 아이템)으로 지정
      observer.observe(lastIntersectingImage);
    }
    return () => observer && observer.disconnect();
  }, [lastIntersectingImage]);

  return (
    <>
      {randomImageList?.map((randomImage, index) => {
        if (index === randomImageList.length - 1) {
          return (
            <img
              key={randomImage.id}
              src={randomImage.download_url}
              alt='random'
              ref={setLastIntersectingImage}
              style={{
                borderRadius: 100,
              }}
            />
          );
        } else {
          return <img key={randomImage.id} src={randomImage.download_url} alt='random' />;
        }
      })}
    </>
  );
};
