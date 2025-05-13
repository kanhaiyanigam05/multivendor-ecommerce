import React from "react";

const SizeGuide = () => {
  return (
    <div className="modal fade modal-size-guide" id="size-guide">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content widget-tabs style-2">
          <div className="header">
            <ul className="widget-menu-tab">
              <li className="item-title active">
                <span className="inner text-button">Size </span>
              </li>
              <li className="item-title">
                <span className="inner text-button">Size Guide</span>
              </li>
            </ul>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            ></span>
          </div>
          <div className="wrap">
            <div className="widget-content-tab">
              <div className="widget-content-inner active">
                <div className="tab-size">
                  <div>
                    <div className="widget-size mb_16">
                      <div className="box-title-size">
                        <div className="title-size">Height</div>
                        <div className="number-size">
                          <span className="max-size">100</span>
                          <span className="text-caption-1 text-secondary">
                            Cm
                          </span>
                        </div>
                      </div>
                      <div className="range-input">
                        <div className="tow-bar-block">
                          <div
                            className="progress-size"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="200"
                          // value="100"
                          className="range-max"
                        />
                      </div>
                    </div>
                    <div className="widget-size">
                      <div className="box-title-size">
                        <div className="title-size">Weight</div>
                        <div className="number-size">
                          <span className="max-size">50</span>
                          <span className="text-caption-1 text-secondary">
                            Kg
                          </span>
                        </div>
                      </div>
                      <div className="range-input">
                        <div className="tow-bar-block">
                          <div
                            className="progress-size"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          // value="50"
                          className="range-max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="size-button-wrap choose-option-list">
                    <div className="size-button-item choose-option-item">
                      <h5>thin</h5>
                    </div>
                    <div className="size-button-item choose-option-item select-option">
                      <h5>Normal</h5>
                    </div>
                    <div className="size-button-item choose-option-item">
                      <h5>plump</h5>
                    </div>
                  </div>
                  <div>
                    <h6 className="suggests-title">
                      eCommerce suggests for you:
                    </h6>
                    <div className="suggests-list">
                      <a href="#" className="suggests-item link text-button">
                        L - shirt
                      </a>
                      <a href="#" className="suggests-item link text-button">
                        XL - Pant
                      </a>
                      <a href="#" className="suggests-item link text-button">
                        31 - Jeans
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-content-inner">
                <table className="tab-sizeguide-table">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>US</th>
                      <th>Bust</th>
                      <th>Waist</th>
                      <th>Low Hip</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>XS</td>
                      <td>2</td>
                      <td>32</td>
                      <td>24 - 25</td>
                      <td>33 - 34</td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>4</td>
                      <td>26 - 27</td>
                      <td>34 - 35</td>
                      <td>35 - 26</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>6</td>
                      <td>28 - 29</td>
                      <td>36 - 37</td>
                      <td>38 - 40</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>8</td>
                      <td>30 - 31</td>
                      <td>38 - 29</td>
                      <td>42 - 44</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>10</td>
                      <td>32 - 33</td>
                      <td>40 - 41</td>
                      <td>45 - 47</td>
                    </tr>
                    <tr>
                      <td>XXL</td>
                      <td>12</td>
                      <td>34 - 35</td>
                      <td>42 - 43</td>
                      <td>48 - 50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
