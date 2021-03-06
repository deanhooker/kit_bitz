import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './KitCard.css';
// import cardImage from './kit-image-1.jpg';


class KitCard extends Component
{

  importAll = (r) => {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }


    render()
    {
      const images = this.importAll(require.context('../../../../uploads/kit-pics', false, /\.(png|jpe?g|svg)$/));

        return (
            <Link to={"/createkit/" + this.props.kit._id}>
              <div className="kit-card">
                <div className="kit-image-div">
                        <img
                        id="kitImage"
                        src={images[this.props.kit.kitImgPath.name]}
                        alt="Kit-Bitz"
                        />
                </div>

                <div className="kit-title">
                    <p>
                    {this.props.kit.kitName}
                    </p>
                </div>
                <div className="kit-owner">
                     <p>
                    Created by <span id="pop-blue">{this.props.kit.createdBy.username} </span>
                    </p>
                </div>
                <div className="kit-designer">
                    <p>
                    Kit designed by <span id="pop-blue">{this.props.kit.createdBy.designer} </span>
                    </p>
                </div>

                <div className="kit-summary">
                    <p><small>{this.props.kit.description}</small></p>
                </div>





              </div>
            </Link>

        );
    }
}

export default KitCard;
