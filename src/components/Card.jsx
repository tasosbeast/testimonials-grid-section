import PropTypes from "prop-types";

export default function Card({
  name,
  status,
  image,
  className,
  headline,
  detail,
}) {
  const cardColors = {
    card1: "bg-Purple-500",
    card2: "bg-Grey-500",
    card3: "bg-White",
    card4: "bg-Dark-blue",
    card5: "bg-White",
  };

  const textColors = {
    card1: "text-Purple-50",
    card2: "text-Grey-100",
    card3: "text-Grey-500",
    card4: "text-Grey-100",
    card5: "text-Grey-400",
  };

  const imageBgColors = {
    card1: "bg-Purple-300",
    card4: "bg-Purple-500",
  };

  const gridProperties = {
    card1: "md:col-span-2",
    card2: "",
    card3: "",
    card4: "md:col-span-2 ",
    card5:
      "md:col-span-2 xl:row-span-2 xl:row-start-1 xl:col-span-1 xl:col-start-4 ",
  };
  return (
    <div
      className={`rounded-lg p-32 shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.24)] ${cardColors[className]} ${gridProperties[className]} ${className === "card1" ? "md:bg-[url(../assets/images/bg-pattern-quotation.svg)] md:bg-[85%_0%] md:bg-no-repeat" : ""}`}
    >
      <div className="mb-16 flex items-center gap-16">
        <div
          className={`w-fit rounded-full ${imageBgColors[className]} p-[2px]`}
        >
          <img src={image} alt={name} className="rounded-full" width="28px" />
        </div>
        <div>
          <p
            className={`mb-4 ${className === "card5" || className === "card3" ? "text-Grey-500" : ""}`}
          >
            {name}
          </p>
          <p className={`text-preset-4 ${textColors[className]}`}>{status}</p>
        </div>
      </div>

      <h2
        className={`mb-16 text-preset-1 ${className === "card5" || className === "card3" ? "text-Grey-500" : ""}`}
      >
        {headline}
      </h2>
      <p className={`${textColors[className]} text-preset-3`}>“ {detail} “</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};
