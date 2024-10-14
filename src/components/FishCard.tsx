import React from 'react'
import { FishData } from "../types/fishdata"

interface FishCardProps {
    fishData: FishData
}

const FishCard: React.FC<FishCardProps> = ({ fishData }) => {
  return (
    <div>
      {fishData.ImageGallery && fishData.ImageGallery.length > 0 && (
        <div>
          <img
            src={fishData.ImageGallery[0].src ?? ''}
            alt={fishData.ImageGallery[0].alt ?? ''
            }
          />
          <p>{fishData.ImageGallery[0].title}</p>
        </div>
      )}

      <div>
        <h5>{fishData.SpeciesName}</h5>
        <p>{fishData.PhysicalDescription}</p>
        <p>{fishData.FatTotal}</p>
        <p>{fishData.Calories}</p>
      </div>
    </div>
  );
};

export default FishCard;
