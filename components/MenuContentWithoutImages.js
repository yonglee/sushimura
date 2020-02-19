import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import MenuContentWithoutImagesStyles from "../styles/MenuContentWithoutImagesStyles";

const MenuItem = ({ item, index }) => {
  const arrayTitle = item.title.split(/ \/ | or /gi);
  // console.log(arrayTitle, arrayTitle.length);
  return (
    <div className={"item " + (index % 2 === 0 ? "odd" : "even")}>
      {item.small !== "" && (
        <div className="image-box">
          <img src={item.small} />
        </div>
      )}
      <div className="title-box">
        <div className="title">
          {arrayTitle.length > 1 ? (
            <>
              {arrayTitle.map((t, i) => (
                <div key={uuid.v4()} className="long-title">
                  {t} {i + 1 < arrayTitle.length && <> /</>}
                </div>
              ))}
            </>
          ) : (
            <>
              {arrayTitle.map(t => (
                <div key={uuid.v4()}>{t}</div>
              ))}
            </>
          )}
        </div>
        <div className="dot-box">
          <div>{`.`.repeat(140)}</div>
        </div>
        <div className="price">{item.price}</div>
      </div>
      {item.title_desc && item.title_desc !== "" && (
        <div className="title-desc-box">
          <div className="title-desc">{item.title_desc}</div>
        </div>
      )}
      {item.desc && item.desc !== "" && (
        <div className="desc">
          <em>({item.desc})</em>
        </div>
      )}
    </div>
  );
};

const MenuContentWithoutImages = ({ data }) => {
  // console.log(data);
  return (
    <MenuContentWithoutImagesStyles>
      {data[0].size_title ? (
        <>
          {data.map(size_items => (
            <div key={size_items.id} className="size-title-box">
              <h2 className="size-title">{size_items.size_title}</h2>
              <div className="items">
                {size_items.items
                  .filter(dataItem => dataItem.small !== "")
                  .map((item, index) => (
                    <MenuItem key={item.id} item={item} index={index} />
                  ))}
              </div>
              <div className="items">
                {size_items.items
                  .filter(dataItem => dataItem.small === "")
                  .map((item, index) => (
                    <MenuItem key={item.id} item={item} index={index} />
                  ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="items">
            {data
              .filter(dataItem => dataItem.small !== "")
              .map((item, index) => (
                <MenuItem key={item.id} item={item} index={index} />
              ))}
          </div>
          <div className="items">
            {data
              .filter(dataItem => dataItem.small === "")
              .map((item, index) => (
                <MenuItem key={item.id} item={item} index={index} />
              ))}
          </div>
        </>
      )}
    </MenuContentWithoutImagesStyles>
  );
};

MenuContentWithoutImages.propTypes = {
  data: PropTypes.array.isRequired
};

export default MenuContentWithoutImages;
