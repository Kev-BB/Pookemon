export default function SoundButtons({ clickHandlers }) {
  return (
    <div className="start-and-select-buttons-container">
      <div className="select-button">
        <button onClick={clickHandlers.turnOffSound}>
          {" "}
          <img src="./assets/images/icons/sound-off.svg" />
        </button>
        <span>Seçiniz</span>
      </div>

      <div className="start-button">
        <button onClick={clickHandlers.turnOnSound}>
          {" "}
          <img src="./assets/images/icons/sound-on.svg" />
        </button>
        <span>Başlat</span>
      </div>
    </div>
  );
}
