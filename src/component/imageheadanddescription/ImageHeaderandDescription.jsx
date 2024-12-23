import "./Index.css";

export default function ImageHeaderandDescription({
  headText,
  description,
  imgsrc,
  icon,
  className,
  image,
}) {
  return (
    <>
      <div id="imageheaderdescription" className={className}>
        {imgsrc}
        <img src={image} alt="" />
        <div>
          <h3>{headText}</h3>
          <p>{description}</p>
        </div>
        {icon}
      </div>
    </>
  );
}
