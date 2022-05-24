import React, { Component } from "react";
import styles from "./Tile.module.css";
import { returnPicture } from "../methods/jsonMethods";
import { returnGenres } from "../methods/jsonMethods";
import { NavLink } from "react-router-dom";



export default class Tile extends Component {
  constructor(props){
    super(props);
    this.svgs = [];
  }
  renderSVGS(){
    let html = "";
    console.log(this.svgs)
    if(this.svgs.length ===0){
      
      this.svgs = returnPicture(this.props.platforms);
      console.log("🚀 ~ file: Tile.js ~ line 18 ~ Tile ~ renderSVGS ~ this.svgs", this.svgs)
    }
    for (let i = 0; i < this.svgs.length && i < 3; i++) {
      html += this.svgs[i];
      console.log("🚀 ~ file: Tile.js ~ line 21 ~ Tile ~ renderSVGS ~ html", html)
    }
    if (this.svgs[3] !== undefined){
      html += "<div style="+styles.svg+">"+(this.svgs.length - 3)+"</div>"
    }
    
    return html;
  }
  render() { 
    return (

      <NavLink
        to={`Detailview/${this.props.id}`}
        style={{ textDecoration: "none" }}
      >
        <div className={styles.tileBox}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${this.props.background})`,
            }}
          />

          <div className={styles.tileContent}>
            <div className={styles.topContent}>
              <div
                className={styles.svg}
                style={{ display: "flex" }}
                dangerouslySetInnerHTML={{
                   __html: this.renderSVGS(),
                }}
              >
              </div>
              {this.props.metacritic !== null ? (
                <div className={styles.metaScore}>{this.props.metacritic}</div>
              ) : (
                ""
              )}
            </div>
            <h1>{this.props.name}</h1>
            <div className={styles.showDetailedContent}>
              <div className={styles.releaseDateContent}>
                <div className={styles.releaseDateContentFirst}>Release date:</div>
                <div className={styles.releaseDateContentSecond}>{this.props.releaseDate}</div>
              </div>
              <div className={styles.borderLine}></div>
              <div className={styles.genreContent}>
                <div className={styles.genreContentFirst}>Genres:</div>
                <div className={styles.genreContentSecond}
                dangerouslySetInnerHTML={{
                  __html: returnGenres(this.props.genres),
                }}/>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}
