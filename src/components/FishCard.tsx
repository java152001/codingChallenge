import React from 'react'
import { FishData } from "../types/fishdata"
import sanitizeHtml from 'sanitize-html'
import placeHolderImage from '../assets/placeholder--fish.png'

interface FishCardProps {
    fishData: FishData
}

const FishCard: React.FC<FishCardProps> = ({ fishData }) => {
  return (
    <div className='card'>
      {(fishData.ImageGallery && fishData.ImageGallery.length > 0) ? (
        <div className='card-image'>
          <img

            src={fishData.ImageGallery[0].src ?? ''}
            alt={fishData.ImageGallery[0].alt ?? ''
            }
          />
          <p className='title-text'>{fishData.ImageGallery[0].title}</p>
        </div>
      ) :
      (
        <div className='card-image'>
          <img
            src={placeHolderImage}
            alt={'placeholder fish'}
          />
          <p className='title-text'>Fish Image Missing</p>
        </div>
      )
    }

      <div className='card-details'>
        <h2 className='card-title'>{fishData.SpeciesName}</h2>
        <p>{sanitizeHtml(fishData.PhysicalDescription, { allowedTags: []})}</p>
        <p>Total Fat per Serving: <span className='emphasis'>{fishData.FatTotal}</span></p>
        <p>Total Calories per Serving: <span className='emphasis'>{fishData.Calories}</span></p>
      </div>
    </div>
  );
};

export default FishCard;
