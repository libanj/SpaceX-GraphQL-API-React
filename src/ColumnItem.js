import React from "react";
import { Link } from "react-router-dom";

function ColumnItem({ id, image, name }) {
  return (
    <div className="item">
      <Link to={`/ship/${id}`}>
        <img src={`${image}`} alt={`${name}`} />
        <div className="overlay">
          <h3>{`${name}`}</h3>
          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
            tempore similique quod at architecto id quia quo, natus eum
            doloribus, voluptatibus non inventore molestias expedita sequi
            voluptas quibusdam dignissimos molestiae minima exercitationem ad
            aspernatur sed! Quidem nemo iusto doloribus, cupiditate labore dicta
            molestias, quisquam eius quis odio facere libero minima quae,
            ratione quos cum. Eaque at quia dolores rem? Debitis quod
            distinctio, est labore ratione vero similique exercitationem nam
            nemo deleniti recusandae fugit atque nobis quam ex? Laborum alias
            beatae non, iure nam amet deleniti dolorem nobis excepturi nulla
            error impedit molestiae architecto! Maiores esse consequuntur amet
            eos deserunt magnam.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ColumnItem;
