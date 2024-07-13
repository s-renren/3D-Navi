import { useState } from 'react';
import styles from './index.module.css';

const SightseeingMap = () => {
  const [selectedPlace, setSelectedPlace] = useState<string[]>([]);

  const handleSelectPlace = (place: string) => {
    if (selectedPlace.includes(place)) {
      setSelectedPlace(selectedPlace.filter((p) => p !== place));
      return;
    }
    setSelectedPlace([...selectedPlace, place]);
  };

  const onClickDecide = () => {
    if (selectedPlace.length === 0) {
      alert('行き先を選択してください');
      return;
    }
    //ここにpost処理を書く
    alert(`行き先は${selectedPlace.join('、')}です`);
  };

  return (
    <div>
      <h1>観光地マップ</h1>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4094.246992558676!2d135.4966105087244!3d34.702594556611075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1720882526114!5m2!1sja!2sjp"
          width="800"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className={styles.buttonWrapper}>
        <button
          onClick={() => handleSelectPlace('金閣寺')}
          style={{
            backgroundColor: selectedPlace.includes('金閣寺') ? 'red' : 'white',
          }}
        >
          金閣寺
        </button>
        <button
          onClick={() => handleSelectPlace('清水寺')}
          style={{
            backgroundColor: selectedPlace.includes('清水寺') ? 'red' : 'white',
          }}
        >
          清水寺
        </button>
        <button
          onClick={() => handleSelectPlace('伏見稲荷大社')}
          style={{
            backgroundColor: selectedPlace.includes('伏見稲荷大社') ? 'red' : 'white',
          }}
        >
          伏見稲荷大社
        </button>
      </div>
      <button onClick={onClickDecide}>行き先決定</button>
    </div>
  );
};

export default SightseeingMap;
