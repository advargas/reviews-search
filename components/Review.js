import Image from "next/image";
import aa from 'search-insights';
import {Highlight, connectHitInsights} from 'react-instantsearch-dom';
import like from '../images/like.png';

const ReviewCard = ({hit, insights}) => {
    return (
      <div className="p-4 w-full">
      <div className="h-full bg-gray-100 p-8 rounded">
        <span className="title-font font-medium text-gray-900">
          <Highlight attribute="title" hit={hit} />
        </span>
        <br/>
        <span className="text-green-500 text-sm">
          <Highlight attribute="topic" hit={hit} />
        </span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="bg-purple-700 text-white text-xs">
          <Highlight attribute="record" hit={hit} />
        </span>
        <br/><br/>
        <p className="leading-relaxed mb-6">
          <Highlight attribute="text" hit={hit} />
        </p>
        <a href="#" onClick={() => {
                insights('clickedObjectIDsAfterSearch', {
                    eventName: 'Search Result Favorite',
                    objectIDs: [hit.objectID]
                });
            }}>
            <Image id="likeImg" src={like} width='30' height='30'/>
        </a>
        <span className="flex-grow flex flex-col pl-4">
          <span className="title-font font-medium text-gray-900">
            <Highlight attribute="authorName" hit={hit} />
          </span>
          <span className="text-gray-500 text-sm">
            <Highlight attribute="authorTitle" hit={hit} />
          </span>
        </span>      
      </div>
      </div>
    );
  }

const Review = connectHitInsights(aa)(ReviewCard);
export default Review;