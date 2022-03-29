import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Swal from "sweetalert2";
import { render } from "react-dom";




const Error404= () => {




  return (
      <div className="container-fluid">
              <div className="row">
                  <div className="col-md-12">
                      <div className="jumbotron">
                          <h2>
                              Lo siento, la pagina no existe.
                          </h2>
                          <p>
                              This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
                          </p>
                          <p>
                              <a className="btn btn-primary btn-large" href="#">Learn more</a>
                          </p>
                      </div>
                      <div className="carousel slide" id="carousel-925926">
                          <ol className="carousel-indicators">
                              <li data-slide-to="0" data-target="#carousel-925926" className="active">
                              </li>
                              <li data-slide-to="1" data-target="#carousel-925926">
                              </li>
                              <li data-slide-to="2" data-target="#carousel-925926">
                              </li>
                          </ol>
                          <div className="carousel-inner">
                              <div className="carousel-item active">
                                  <img className="d-block w-100" alt="Carousel Bootstrap First" src="https://www.layoutit.com/img/sports-q-c-1600-500-1.jpg" />
                                  <div className="carousel-caption">
                                      <h4>
                                          First Thumbnail label
                                      </h4>
                                      <p>
                                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                      </p>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  <img className="d-block w-100" alt="Carousel Bootstrap Second" src="https://www.layoutit.com/img/sports-q-c-1600-500-2.jpg" />
                                  <div className="carousel-caption">
                                      <h4>
                                          Second Thumbnail label
                                      </h4>
                                      <p>
                                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                      </p>
                                  </div>
                              </div>
                              <div className="carousel-item">
                                  <img className="d-block w-100" alt="Carousel Bootstrap Third" src="https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg" />
                                  <div className="carousel-caption">
                                      <h4>
                                          Third Thumbnail label
                                      </h4>
                                      <p>
                                          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                                      </p>
                                  </div>
                              </div>
                          </div> <a className="carousel-control-prev" href="#carousel-925926" data-slide="prev"><span className="carousel-control-prev-icon"></span> <span className="sr-only">Previous</span></a> <a className="carousel-control-next" href="#carousel-925926" data-slide="next"><span className="carousel-control-next-icon"></span> <span className="sr-only">Next</span></a>
                      </div>
                  </div>
              </div>
          </div>

    )

}

export default Error404;
