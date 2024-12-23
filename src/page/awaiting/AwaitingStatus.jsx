import "./AwaitingStatus.css";
import React from "react";
import SideBar from "../../component/sidebar/SideBar";
import {
  LeftArrow,
  Search,
  Notifications,
  Chat,
  ArrowDown,
  User,
  Cancel,
  Building,
  Documents,
} from "../../component/Icons";
import Input from "../../component/Input";
import Button from "../../component/Button";
import ImageHeaderandDescription from "../../component/imageheadanddescription/ImageHeaderandDescription";

export default function AwaitingStatus() {
  return (
    <>
      <div className="awaitingcontainer">
        <SideBar />
        <div className="secondgridcontainer">
          <div className="awaitingtopsection">
            <div className="backarrow">
              <LeftArrow size={24} />
              <p>Back</p>
            </div>
            <div className="searchbarsection">
              <div className="searchbar">
                <Search size={20} />
                <Input
                  className={"searchinput"}
                  placeholder={"Search here..."}
                />
              </div>
              <Notifications size={24} />
              <Chat size={24} />
              <div className="usersection">
                <User size={32} />
                <ArrowDown size={24} />
              </div>
            </div>
          </div>

          <div className="quotedetailscontainer">
            <div>
              <h2>Quote details</h2>
              <p>Create on Wed, 12th June 2022, 08:00am</p>
            </div>
            <div className="quotebtn">
              <Button className={"respondbtn"} text={"Respond"} />
              <Button
                className={"rejectbtn"}
                icon={<Cancel />}
                text={"Reject"}
              />
            </div>
          </div>

          <div className="quoteinfocontainer">
            <div className="quoteinfo">
              <h3>Quote Information</h3>
              <p>Expected delivery date: 202-12-02</p>
            </div>
            <div className="quoteinfoitems">
              <div>
                <div className="singlequoteinfo">
                  <h4>Title</h4>
                  <p>Requests for Equipments</p>
                </div>
                <div className="singlequoteinfo">
                  <h4>RFQ No</h4>
                  <p>RQ #01234</p>
                </div>
                <div className="singlequoteinfo">
                  <h4>Requestor</h4>
                  <p>
                    <span id="jdstyle">JD</span> Jane Doe{" "}
                    <span id="headnurse">Head Nurse Paediatrics</span>
                  </p>
                </div>
                <div className="singlequoteinfo">
                  <h4>Status</h4>
                  <p id="awaitingstatus">Awaiting</p>
                </div>
                <div className="singlequoteinfo">
                  <h4>Department</h4>
                  <p>Maternity</p>
                </div>
              </div>
              <div className="clientcontainer">
                <div className="client">
                  <Building />
                  <p>Client</p>
                </div>
                <ImageHeaderandDescription
                  imgsrc={<User size={24} />}
                  headText={"Westend Hospital"}
                  description={"Clear street"}
                />
              </div>
            </div>
          </div>

          <div className="items-table-container">
            <h2>Item(s)</h2>
            <div className="itemlist">
              <div>
                <div className="item-menu">
                  <Input type={"checkbox"} />
                  <h4>Items</h4>
                </div>
                <div className="items">
                  <Input type={"checkbox"} />
                  <ImageHeaderandDescription
                    image={"https://via.placeholder.com/40"}
                    headText={"Oxygen Concentra..."}
                    description={"#28373"}
                  />
                </div>
                <div className="items">
                  <Input type={"checkbox"} />
                  <ImageHeaderandDescription
                    image={"https://via.placeholder.com/40"}
                    headText={"Oxygen Concentra..."}
                    description={"#28373"}
                  />
                </div>
                <div className="items">
                  <Input type={"checkbox"} />
                  <ImageHeaderandDescription
                    image={"https://via.placeholder.com/40"}
                    headText={"Oxygen Concentra..."}
                    description={"#28373"}
                  />
                </div>
                <div className="items">
                  <Input type={"checkbox"} />
                  <ImageHeaderandDescription
                    image={"https://via.placeholder.com/40"}
                    headText={"Oxygen Concentra..."}
                    description={"#28373"}
                  />
                </div>
              </div>
              <div>
                <h4>Variants</h4>
                <div>
                  <p>Blue</p>
                  <p>NIL</p>
                  <p>Blue</p>
                  <p>Blue</p>
                </div>
              </div>
              <div>
                <h4>Quantity</h4>
                <div>
                  <p>100 pieces</p>
                  <p>45 Kg</p>
                  <p>30 Units</p>
                  <p>35 Units</p>
                </div>
              </div>
              <div>
                <h4>Price</h4>
                <div>
                  <p>$200.00</p>
                  <p>$350.00</p>
                  <p>$300.00</p>
                  <p>$200.00</p>
                </div>
              </div>
              <div>
                <h4>Amount</h4>
                <div>
                  <p>$2,000.00</p>
                  <p>$2,500.00</p>
                  <p>$1,500.00</p>
                  <p>$1,500.00</p>
                  <p>Sub Total</p>
                  <p>Total</p>
                </div>
              </div>
              <div>
                <h4>Expected Delivery Date</h4>
                <div>
                  <p>2024-08-07</p>
                  <p>2024-08-07</p>
                  <p>2024-08-07</p>
                  <p>2024-08-07</p>
                  <p>$8,000.00</p>
                  <p>$8,750.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="termsandattachmentscontainer">
            <ImageHeaderandDescription
              className={"termsandattachments"}
              imgsrc={<Documents />}
              headText={"Terms and Attachments"}
              description={"Review payment and delivey terms"}
            />

            <ArrowDown />
          </div>
        </div>
      </div>
    </>
  );
}
